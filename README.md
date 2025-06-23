# ExploCity

A web platform for discovering and managing city events, designed for both residents and tourists. The app helps users plan their free time by providing a central source of information about cultural, entertainment, and tourist activities. It features separate interfaces for users and administrators, with a React frontend, Spring Boot backend, MongoDB database, and AWS S3 for file storage.

## Team
- [Add team members here]

## Features
- Browse all available city events and attractions
- View detailed event information (description, price, image)
- User registration and login
- Add/remove events from a personal cart
- Admin panel for managing events (add/remove, with images)
- Secure authentication (JWT)
- Responsive UI (React + Bootstrap)
- File storage via AWS S3

## Project Structure
- `/frontend/exploCity` – User-facing React app
- `/frontend/adminpanel` – Admin React app
- `/backend` – Spring Boot API and business logic
- `/mongo-init` – MongoDB initialization scripts
- `/design` – Figma exports and mockups
- `/docs` – Project documentation

## Project Status
**Development stage:** Testing only (no public deployment yet)

## How to Run the Application (Local Testing)

### Prerequisites
- [ ] [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed and running on your machine
- [ ] Clone this repository
- [ ] Prepare a `.env` file in the root directory with the following variables:
  - `AWS_ACCESS_KEY=your_aws_access_key`
  - `AWS_SECRET_KEY=your_aws_secret_key`
  - If you already have a `.env` file from an external source, simply copy or move it to the root directory:
    ```bash
    cp /path/to/your/.env .
    # or
    mv /path/to/your/.env .
    ```
- [ ] (Optional) Adjust ports in `docker-compose.yml` if needed

### Steps
1. **Clone the repository:**
   ```bash
   git clone git@github.com:your-team/project-name.git
   cd project-name
   ```
2. **Create or copy the `.env` file as described above**
3. **Start the application:**
   ```bash
   docker-compose up --build
   ```
4. **Access the apps:**
   - Main frontend: [http://localhost:3000](http://localhost:3000)
   - Admin panel: [http://localhost:3001](http://localhost:3001)
   - Backend API: [http://localhost:8080](http://localhost:8080)

For troubleshooting, ensure Docker is running and your `.env` file is correctly set up.

## More Information
- [Project documentation](./docs/Dokumentacja.md)
- [Contributing & setup guide](./COUNTRIBUTING.md)
