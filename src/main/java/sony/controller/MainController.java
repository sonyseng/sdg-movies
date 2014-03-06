package sony.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Controller
public class MainController {

	// This key is now obsolete. Please register for free with rotten tomatoes api to get your own key
	private String API_KEY = "xh3njfuje8r6339z4p5855cy";
	
	@RequestMapping(value="movies", method=RequestMethod.GET, produces="application/json")
    public @ResponseBody String greeting(
    		@RequestParam(value="page_limit", required=true, defaultValue="10") int pageLimit,
    		@RequestParam(value="page", required=true, defaultValue="1") int page,
    		@RequestParam(value="country", required=false, defaultValue="us") String country) {
    	
		String moviesUrl = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit={pageLimit}&page={page}&country={country}&apikey={apiKey}";
    	RestTemplate restTemplate = new RestTemplate();
    	String response;
    	
    	try {
    		response = restTemplate.getForObject(moviesUrl, String.class, pageLimit, page, country, this.API_KEY);
    	} catch (RestClientException rce) {
    		response = "";
    	} finally {
    		
    	}
    	
    	return response;
    }

}
