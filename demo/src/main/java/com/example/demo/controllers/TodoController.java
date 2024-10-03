package com.example.demo.controllers;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.demo.domain.task.TaskRepository;
import com.example.demo.domain.task.RequestTask;
import com.example.demo.domain.task.Task;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class TodoController {

    @Autowired
    private TaskRepository repository;

    @GetMapping("/get")
    public ResponseEntity getAllTasks() {

        var allTasks = repository.findAll();
        return ResponseEntity.ok(allTasks);
    }

    @PostMapping
    public ResponseEntity registerTask(@RequestBody @Valid RequestTask data) {

        Task newTask = new Task(data);
        repository.save(newTask);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity updateTask(@RequestBody @Valid RequestTask data ) {

        Task task = repository.getReferenceById(data.id());
        task.setName(data.name());
        task.setCompleted(data.completed());

        repository.save(task);


        return ResponseEntity.ok().build();
    }

    @PutMapping("/delete")
    public ResponseEntity deleteTask(@RequestBody @Valid RequestTask data) {

        repository.deleteById(data.id());

        return ResponseEntity.ok().build();
    }

}
