import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import org.json.*;

public class Translate {
	private String text;
	
	private static String readUrl(String urlString) throws Exception {
	    BufferedReader reader = null;
	    try {
	        URL url = new URL(urlString);
	        
	        reader = new BufferedReader(new InputStreamReader(url.openStream()));
	        StringBuffer buffer = new StringBuffer();
	        int read;
	        char[] chars = new char[1024];
	        while ((read = reader.read(chars)) != -1)
	            buffer.append(chars, 0, read); 

	        return buffer.toString();
	    } finally {
	        if (reader != null)
	            reader.close();
	    }
	}
	
	public String replace(String str) {
	    String[] words = str.split(" ");
	    StringBuilder sentence = new StringBuilder(words[0]);

	    for (int i = 1; i < words.length; ++i) {
	        sentence.append("%20");
	        sentence.append(words[i]);
	    }

	    return sentence.toString();
	}
	
	public String translate(String input) throws Exception
	{
		try{
			input = replace(input);
			JSONObject json = new JSONObject(readUrl("https://www.googleapis.com/language/translate/v2?key=AIzaSyBzMn8HtuO4nnhp8qPxMiDuzV_7kyi8sRQ&q="+input+"&target=en"));
			JSONArray arr = json.getJSONObject("data").getJSONArray("translations");
			for (int i = 0; i < arr.length(); i++)
			{
			    this.text = arr.getJSONObject(i).getString("translatedText");
			}
		}
		catch (JSONException e) {
		    e.printStackTrace();
		}
		return text;
	}
	
	public static void main(String args[]) throws Exception 
	{
		Translate text = new Translate();
		
		System.out.println(text.translate("Hola"));
	}
}
