package angularTests.controler;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import angularTests.db.DbAngular;
import angularTests.model.Post;

@Path("posts")
public class PostResource {
	private static Logger log = Logger.getLogger(DbAngular.class);
	private DbAngular dbAngular;

	public PostResource() throws Exception {
		dbAngular = DbAngular.instance("dbfiles.json");
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Post> getPosts(){
		List<Post> posts = dbAngular.getPosts();
		log.info("posts="+posts.size());
		return posts;
	}

	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void loadPosts(Post post){
		dbAngular.add(post);
	}
	
	@DELETE
	@Path("{id}")
	public Message remove(@PathParam("id")int id){
		log.info("removing item with id="+id);
		dbAngular.remove(id);
		return new Message("Removed with success");
	}
}

