package angularTests.controler;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
		dbAngular = new DbAngular("dbfiles.json");
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Post> getPosts(){
		List<Post> posts = dbAngular.getPosts();
		log.info("posts="+posts.size());
		return posts;
	}

}
