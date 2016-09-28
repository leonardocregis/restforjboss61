package angularTests.db;


import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
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
		this.posts = Arrays.asList(mapper.readValue(destinyString.toString(), Post[].class));		
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
			log.info(dbAngular.getPosts());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public boolean remove(long id) {
		return posts.remove(id);
		
	}

}
