package com.teamtreehouse.courses.model;

import java.util.List;

/**
 * Created by Juri on 12/01/2017.
 */
public interface CourseIdeaDAO {
    boolean add(CourseIdea idea);

    List<CourseIdea> findAll();

    CourseIdea findBySlug(String slug);

}
