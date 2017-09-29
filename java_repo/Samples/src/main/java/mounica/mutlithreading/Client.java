package mounica.mutlithreading;

import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Client extends JFrame {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// Text field for receiving radius
	private JTextField jtf = new JTextField();

	// Text area to display contents
	private JTextArea jta = new JTextArea();

	// IO streams
	private DataOutputStream toServer;
	private DataInputStream fromServer;

	public static void main(String[] args) {
		new Client();
	}

	public Client() {
		// Panel p to hold the label and text field
		JPanel p = new JPanel();
		p.setLayout(new BorderLayout());
		p.add(new JLabel("Enter your request"), BorderLayout.WEST);
		p.add(jtf, BorderLayout.CENTER);
		jtf.setHorizontalAlignment(JTextField.RIGHT);

		setLayout(new BorderLayout());
		add(p, BorderLayout.NORTH);
		add(new JScrollPane(jta), BorderLayout.CENTER);

		jtf.addActionListener(new ButtonListener()); // Register listener

		setTitle("Client");
		setSize(500, 300);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		setVisible(true); // It is necessary to show the frame here!

		// Create a socket to connect to the server
		// Try with closable resource. avoiding resource leaks on action of button close .
		try {
			Socket socket = new Socket("kh2034.kitspl.com", 8000);
			// Socket socket = new Socket("130.254.204.36", 8000);
			// Socket socket = new Socket("drake.Armstrong.edu", 8000);

			// Create an input stream to receive data from the server
			fromServer = new DataInputStream(socket.getInputStream());

			// Create an output stream to send data to the server
			toServer = new DataOutputStream(socket.getOutputStream());
		} catch (IOException ex) {
			jta.append(ex.toString() + '\n');
		}
	}

	private class ButtonListener implements ActionListener {
		public void actionPerformed(ActionEvent e) {
			try {
				// Get the radius from the text field
				String reqToSend = String.valueOf(jtf.getText().trim());

				// Send the radius to the server
				toServer.writeUTF(reqToSend);
				toServer.flush();

				// Get area from the server
				String responseFromServer = fromServer.readUTF();

				// Display to the text area
				jta.append(responseFromServer);
			} catch (IOException ex) {
				System.err.println(ex);
			}
		}
	}
}