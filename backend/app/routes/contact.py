import os
import smtplib
from email.mime.text import MIMEText
from fastapi import APIRouter, BackgroundTasks, status
from app.schemas import ContactCreate

router = APIRouter()

@router.post("/", status_code=status.HTTP_201_CREATED, summary="Send a contact email")
def send_contact(contact: ContactCreate, background_tasks: BackgroundTasks):
    """
    Queues a background task to send a contact email.
    """
    background_tasks.add_task(_send_email, contact)
    return {"status": "email_queued"}

def _send_email(contact: ContactCreate):
    """
    Reads SMTP credentials from the environment and sends the email via Ethereal.
    """
    smtp_user = "guy.stoltenberg@ethereal.email"
    smtp_pass = "qbEcErpZZK8u7jCcEF"

    if not smtp_user or not smtp_pass:
        raise RuntimeError("Missing SMTP credentials")

    # Build the email
    msg = MIMEText(contact.message)
    msg["Subject"] = f"New message from {contact.first_name} {contact.last_name}"
    msg["From"]    = smtp_user
    msg["To"]      = "pthoffman@dons.usfca.edu"

    # Connect to Ethereal on port 587, upgrade to TLS, then send
    server = smtplib.SMTP("smtp.ethereal.email", 587, timeout=10)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(smtp_user, smtp_pass)
    server.send_message(msg)
    server.quit()
