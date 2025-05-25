package com.example.ExpocityProject.service;

import com.example.ExpocityProject.io.SightRequest;
import com.example.ExpocityProject.io.SightResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SightService {

    String uploadFile(MultipartFile file);
     SightResponse addSight(SightRequest request, MultipartFile file);

     List<SightResponse> readSights();

     SightResponse readSight(String id);

     boolean deleteFile(String filename);

     void deleteSight(String id);

}
