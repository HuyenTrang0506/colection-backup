package com.example.quanlisinhvien.dao;

import com.example.quanlisinhvien.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

    @RepositoryRestResource
        public interface StudentRepository extends JpaRepository<Student, Integer> {
            public List<Student> findByFirstName(String firstName);
            public List<Student> findByFirstAndLastName(String firstName, String lastName);
            @Query("SELECT s FROM Student s WHERE s.firstName<>:?1")
            public List<Student> findByFirstNameNot(String firstName);
            public List<Student> findByFirstNameNotContain(String firstName);



}
