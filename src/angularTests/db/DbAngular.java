package angularTests.db;


import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;

import angularTests.model.Post;

public class DbAngular {
	private static Logger log = Logger.getLogger(DbAngular.class);

	private static DbAngular dbAngular;

	private List<Post> posts;
	private StringBuilder destinyString;

	public synchronized static DbAngular instance(String localFile) throws Exception{
		if (dbAngular == null) {
			dbAngular = new DbAngular(localFile);
		}
		return dbAngular;
	}
	
	private DbAngular(String localFile) throws Exception {
		this.destinyString = new StringBuilder();
		InputStream is = DbAngular.class.getResourceAsStream("/"+localFile);
		if (is != null) {
			InputStreamReader inputStreamReader = new InputStreamReader(is);
			setReadLinesCommand(new JavaVersion7LoadFile(inputStreamReader, destinyString));
			loadJson();
		}else log.error("InputSream for "+localFile+" not found");

	}

	public DbAngular(InputStream inputStream) {
		InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
		setReadLinesCommand(new JavaVersion7LoadFile(inputStreamReader, destinyString));
	}

	public void setReadLinesCommand(JavaVersionCommand readLinesCommand) {
		this.readLinesCommand = readLinesCommand;
	}

	private JavaVersionCommand readLinesCommand;

	private void loadJson() throws Exception {
		readLinesCommand.executeCommand();
		ObjectMapper mapper = new ObjectMapper();
		Post[] posts = mapper.readValue(destinyString.toString(), Post[].class);
		this.posts = new ArrayList<Post>();
		for (Post post : posts){
			this.posts.add(post);
		}
	}

	public List<Post> getPosts() {
		if (posts == null) {
			posts = new ArrayList<Post>();
		}
		return posts;
	}

	public void add(Post post) {
		posts.add(post);		
	}

	public static void main(String[] args) {
		try {
			DbAngular dbAngular = new DbAngular("dbfiles.json");
			log.info(dbAngular.getPosts().size());
			log.info(dbAngular.remove(1));
			log.info(dbAngular.getPosts().size());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Post remove(int id) {
		return posts.remove(id);
		
	}

	public void set(int index,Post post){
		posts.set(index, post);
	}
	public Post get(String id) {
		for (Post post : posts){
			if (post.getId().equals(id)){
				return post;
			}
		}
		return null;
	}

}
