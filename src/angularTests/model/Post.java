package angularTests.model;

import java.io.File;
import java.io.IOException;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

@XmlRootElement
public class Post {

	String id;
	String titulo;
	String url;
	String descricao;
	String grupo;
	public Post(){}

	public Post(String titulo, String url) {
		this.titulo = titulo;
		this.url = url;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;

	}
	
	public String getGrupo() {
		return grupo;
	}

	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}
	@Override
	public String toString() {
		return "Post [id=" + id + ", titulo=" + titulo + ", url=" + url + ", descricao="
				+ descricao + ", grupo=" + grupo + "]";
	}

	public static void main(String[] args) {
		
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = "{\"url\" : \"oi\",\"titulo\":\"oi\",\"descricao\":\"\",\"id\":\"3\",\"grupo\":\"2\"}";

		//JSON from file to Object

		//JSON from String to Object
		Post post;
		try {
			post = mapper.readValue(jsonInString, Post.class);
			System.out.println(post);
			
			
			Post[] posts = mapper.readValue(new File("src/dbfiles.json"), Post[].class);
			for (Post post2 : posts) {
				System.out.println(post2);
			}
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public Group getGrupoObj() {
		return new Group(this.grupo);
	}
}
