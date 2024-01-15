package org.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/greeting")
public class GreetingController {

	@GetMapping
	public String doGet(@RequestParam(defaultValue = "There") String name, Model model) {
		model.addAttribute("name", name);
		return "greeting";
	}
}
