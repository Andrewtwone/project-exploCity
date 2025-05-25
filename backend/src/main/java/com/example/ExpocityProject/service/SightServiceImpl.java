package com.example.ExpocityProject.service;

import com.example.ExpocityProject.entity.SightEntity;
import com.example.ExpocityProject.io.SightRequest;
import com.example.ExpocityProject.io.SightResponse;
import com.example.ExpocityProject.repository.SightRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectAclRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SightServiceImpl implements SightService{

    public final S3Client s3Client;

    private final SightRepository sightRepository;
    @Value("${aws.s3.bucketName}")
    public String bucketName;
    @Override
    public String uploadFile(MultipartFile file) {
       String filenameExtension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
        String key = UUID.randomUUID().toString()+"."+filenameExtension;

        try {
            PutObjectRequest putObjectRequest = PutObjectRequest
                    .builder()
                    .bucket(bucketName)
                    .key(key)
                    .acl("public-read")
                    .contentType(file.getContentType())
                    .build();


            PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));
            if (response.sdkHttpResponse().isSuccessful()){
                return "https://"+ bucketName+".s3.amazonaws.com/" + key;
            } else {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "File upload failed");
            }

        }

        catch (IOException ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error ocured during uploading the file");

        }

    }


    @Override
    public SightResponse addSight(SightRequest request, MultipartFile file) {
        SightEntity newSightEntity = convertToEntity(request );
       String imageUrl =  uploadFile(file);
       newSightEntity.setImageUrl(imageUrl);
       newSightEntity = sightRepository.save(newSightEntity);
       return converToResponse(newSightEntity);

    }

    @Override
    public List<SightResponse> readSights() {
        List<SightEntity> databaseEntries = sightRepository.findAll();
        return databaseEntries.stream().map(object-> converToResponse(object)).collect(Collectors.toList());
    }

    @Override
    public SightResponse readSight(String id) {
        SightEntity existingEntity = sightRepository.findById(id).orElseThrow(() -> new RuntimeException("Sight not found for the id : " + id));
        return converToResponse(existingEntity);
    }

    @Override
    public boolean deleteFile(String filename) {
        DeleteObjectRequest deleteObjectRequest  = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(filename)
                .build();
        s3Client.deleteObject(deleteObjectRequest);
        return true;
    }

    @Override
    public void deleteSight(String id) {
        SightResponse response = readSight(id);
       String imageUrl =  response.getImageUrl();
       String filename = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
       deleteFile(filename);
       boolean isFileDelete = deleteFile(filename);
       if (isFileDelete){
           sightRepository.deleteById(response.getId());
       }
    }


    private SightEntity convertToEntity(SightRequest request){
        return SightEntity.builder()
                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .price(request.getPrice())
                .build();
    }
    private SightResponse converToResponse(SightEntity entity){
       return SightResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .imageUrl(entity.getImageUrl())
                .build();


    }




}
