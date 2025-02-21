import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  @Output() closeChat: EventEmitter<void> = new EventEmitter();
  
  // Store chat messages
  chatMessages: { text: string, sent: boolean }[] = [];
  newMessage: string = '';

  // Close chat box
  close() {
    this.closeChat.emit();
  }

  // Send a new message
  sendMessage() {
    if (this.newMessage.trim()) {
      // Add the new message to the messages array
      this.chatMessages.push({ text: this.newMessage, sent: true });

      // Simulate a response (e.g., from Property Manager)
      setTimeout(() => {
        this.chatMessages.push({ text: 'Thank you for reaching out!', sent: false });
      }, 1000);

      // Clear the input field
      this.newMessage = '';
    }
  }
}
