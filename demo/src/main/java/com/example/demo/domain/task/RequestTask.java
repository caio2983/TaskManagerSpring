package com.example.demo.domain.task;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

public record RequestTask(@NotBlank String name , @NotNull Boolean completed ,
                          String id) {

}
