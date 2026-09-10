package com.ssiclosures.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@RequestMapping("/api/upload")
public class ImageUploadController {

    private final Path uploadDirectory;

    public ImageUploadController() {

        this.uploadDirectory =
                Paths.get("uploads/products").toAbsolutePath().normalize();

        try {

            Files.createDirectories(uploadDirectory);

        } catch (IOException e) {

            throw new RuntimeException("Could not create upload directory", e);
        }
    }


    @PostMapping("/image")
    public ResponseEntity<String> uploadImage(
            @RequestParam("file") MultipartFile file) {

        try {

            if (file.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body("Please select an image.");
            }


            String originalFilename = file.getOriginalFilename();

            String extension = "";

            if (originalFilename != null &&
                    originalFilename.contains(".")) {

                extension = originalFilename.substring(
                        originalFilename.lastIndexOf(".")
                );
            }


            String filename =
                    UUID.randomUUID() + extension;


            Path filePath =
                    uploadDirectory.resolve(filename);


            Files.copy(
                    file.getInputStream(),
                    filePath
            );


            return ResponseEntity.ok(
                    "/uploads/products/" + filename
            );

        } catch (IOException e) {

            return ResponseEntity.internalServerError()
                    .body("Image upload failed.");
        }
    }
}