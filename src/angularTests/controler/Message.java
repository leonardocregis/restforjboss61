package angularTests.controler;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Message {

	private String message;

	public Message(String newMessage) {
		this.message = newMessage;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
