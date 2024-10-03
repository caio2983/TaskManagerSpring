package com.example.demo.domain.task;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Table(name="task")
@Entity(name="task")
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private boolean completed;

    private String name;

    public Task(RequestTask requestTask) {

        this.name = requestTask.name();
        this.completed = requestTask.completed();

    }


}
