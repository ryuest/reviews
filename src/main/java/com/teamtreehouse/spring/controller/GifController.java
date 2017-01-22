package com.teamtreehouse.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Fiu on 18/01/2017.
 */
@Controller
public class GifController {
    @RequestMapping("/")
    @ResponseBody

    public String listGifs() {
        return ("return list gifs");
    }
}
