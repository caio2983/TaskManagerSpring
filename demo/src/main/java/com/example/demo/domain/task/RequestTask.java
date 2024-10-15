package com.example.demo.domain.task;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RequestTask(@NotBlank String name, @NotNull Boolean completed, String id) {
}
