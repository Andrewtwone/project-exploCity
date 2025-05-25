package com.example.ExpocityProject.controller;

import com.example.ExpocityProject.io.SightRequest;
import com.example.ExpocityProject.io.SightResponse;
import com.example.ExpocityProject.service.SightService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/sights")
@AllArgsConstructor
public class SightController {
    private final SightService sightService;

    @PostMapping
    public SightResponse addSight(@RequestPart("sight") String sightString,
                                  @RequestPart("file")MultipartFile file){

        ObjectMapper objectMapper = new ObjectMapper();
        SightRequest request = null;
        try{
            request = objectMapper.readValue(sightString, SightRequest.class);
        }
        catch (JsonProcessingException ex){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
        }

        SightResponse response  = sightService.addSight(request, file);
        return response;
    }
    @GetMapping
    public List<SightResponse> readSights(){
       return sightService.readSights();
    }
    @GetMapping("/{id}")
    public SightResponse readSight(@PathVariable String id){
        return sightService.readSight(id);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSight (@PathVariable String id){
            sightService.deleteSight(id);

    }
}
