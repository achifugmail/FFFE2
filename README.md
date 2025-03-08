# Premier League Fantasy Football Front End Web App

## Overview
A mobile-friendly front-end web app for Premier League Fantasy Football, built using modern web development practices. The app connects to your existing backend API to manage user leagues, squads, and gameweeks. The application will be deployed as an Azure Static Web App from a GitHub repository.

## User Roles and Capabilities
### Regular Users
- Manage their own squads and teams.
- View other squads and teams in their leagues.
- View scores in their leagues.

### League Administrators
- Same capabilities as Regular Users.
- Create squads in their leagues and assign users to leagues.

### Global Administrators
- Same capabilities as League Administrators.
- Access the settings page to create draft periods and refresh Premier League data (Gameweeks, Fixtures, Players, PlayerStats, GameweekStats).

## UI Design Priorities
- **Key Features:** Team selection, transfers within a squad, viewing scores, viewing other squads in the league.
- **Design Principles:** Simple, easy to navigate, mobile-friendly, centralized styles.

## Technology Stack
### Front-End Framework/Library
- **React**: A popular JavaScript library for building user interfaces. It offers a component-based architecture, making it easier to build and maintain complex UIs.

### Styling
- **Tailwind CSS**: A utility-first CSS framework that allows you to build custom designs without having to write a lot of custom CSS. It's highly customizable and efficient.

### Icons
- **Font Awesome**: A widely used icon library that offers a large collection of icons. It integrates easily with React.

### Forms and Validation
- **Formik**: A powerful form library for React.
- **Yup**: A JavaScript schema builder for value parsing and validation.

### HTTP Client
- **Axios**: A promise-based HTTP client for making API requests.

### Authentication
- **JWT (JSON Web Tokens)**: For handling user authentication. Tokens should be stored securely in session storage and included in API requests.

### Build Tools
- **Vite**: A modern build tool that offers fast development and building experiences.

### Testing
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **Cypress**: For end-to-end testing. It provides a great developer experience and is very powerful for testing web applications.

### Deployment
- **Azure Static Web Apps**: Since the deployment target is Azure, this service is perfect for deploying static web applications. It integrates well with GitHub for CI/CD.

### Additional Recommendations
- **TypeScript**: Adding TypeScript can improve code quality and maintainability by providing static type checking.
- **ESLint**: For maintaining code quality and enforcing coding standards.
- **Prettier**: For code formatting to ensure a consistent code style.

## Navigation Structure
A fixed navigation bar at the top with icons from Font Awesome and descriptions on mouse over.

### Menu Items
- **League**
  - Icon: Trophy or group icon
  - Description: "League"
- **My Team**
  - Icon: User or group icon
  - Description: "My Team"
- **Scores**
  - Icon: Chart or scoreboard icon
  - Description: "Scores"
- **Settings**
  - Icon: Gear or wrench icon
  - Description: "Settings"

## Team Selection Workflow
- League, draft period, and gameweek selectors with default values.
- List of players grouped by position with selection constraints.
- Player details displayed in a popup or underneath on selection.
- Proactive validation to prevent invalid selections.
- Simple message for rule violations displayed in a div under the navigation bar.

## Transfers Workflow
- Current squad view with player removal and replacement by position.
- Highlight new player with a yellow background.
- Commit button below the transferred player on mobile.
- Use `/PlayerPositions/available-players-with-positions/${leagueId}/${draftPeriodId}` for available players.
- Use `/PlayerPositions/delete-user-squad-player` and `/PlayerPositions/add-user-squad-player` for executing transfers.

## Scores Viewing
### Overall Scores Page
- Table for user stats: User, Total Score, Total Wins, Total 2nd Places, Total Last Places.
- List of squads below the table.

### Gameweek Scores Page
- League, draft period, and gameweek selectors with defaults.
- Team details for the selected gameweek displayed below.
- Team layout adapts to screen width (one per row on mobile, multiple on wider screens).

## Settings Page Functionalities and Feedback
1. **Create League:**
   - Input fields for league name and league code.
   - Button to trigger the `createLeague()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

2. **Create Draft Period:**
   - Input fields for draft period name, start date, and end date.
   - Button to trigger the `createDraftPeriod()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

3. **Populate Gameweeks:**
   - Button to trigger the `populateGameweeks()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

4. **Populate Fixtures:**
   - Button to trigger the `populateFixtures()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

5. **Populate All Players:**
   - Button to trigger the `populateAllPlayers()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

6. **Update All Player Stats:**
   - Button to trigger the `refreshData()` function.
   - Feedback: Display success or error message in a div under the navigation bar.

7. **Refresh Player Stats for a Gameweek:**
   - Button to trigger the `refreshGameweekData()` function.
   - Dropdown to select the gameweek.
   - Feedback: Display success or error message in a div under the navigation bar.

8. **Create Squad:**
   - Collapsible section with input fields for league, user, draft period, and squad name.
   - Button to trigger the creation of a squad.
   - Feedback: Display success or error message in a div under the navigation bar.

## Player Positions Editing Screen
- **Layout:**
  - A table with columns for player details and position dropdowns.
  - A "Save" button to commit changes.
  - Search input and sorting functionality for all columns.
  - Pagination with 20 results per page.

- **Table Columns:**
  - Player Picture
  - Player Name
  - Current Position (editable dropdown)

- **Interaction:**
  - User can search and sort by any column.
  - Pagination controls to navigate through pages (20 results per page).
  - User can change the position of a player using the dropdown.
  - Changes are committed when the user clicks the "Save" button.
  - A success or error message is displayed in a div under the navigation bar after saving.

## Endpoint Calls
### Team Selection
- **Fetch Draft Periods:**
  - Endpoint: `/DraftPeriods`
  - Method: GET

- **Fetch Gameweeks:**
  - Endpoint: `/Gameweeks`
  - Method: GET

- **Fetch Gameweeks by Draft Period:**
  - Endpoint: `/Gameweeks/by-draft-period/{draftPeriodId}`
  - Method: GET

- **Fetch Squad Info:**
  - Endpoint: `/UserSquads/{squadId}`
  - Method: GET

- **Fetch Squad Players:**
  - Endpoint: `/PlayerPositions/user-squad-players/{squadId}`
  - Method: GET

- **Fetch Positions:**
  - Endpoint: `/PlayerPositions/positions`
  - Method: GET

- **Fetch Gameweek Players:**
  - Endpoint: `/UserTeamPlayers/byUserSquadAndGameweek?userSquadId={squadId}&gameweekId={gameweekId}`
  - Method: GET

- **Update Captain:**
  - Endpoint: `/UserTeamPlayers/updateCaptainByGameweekAndSquad`
  - Method: POST

- **Add Player to Team:**
  - Endpoint: `/UserTeamPlayers/AddByGameweekAndSquad`
  - Method: POST

- **Remove Player from Team:**
  - Endpoint: `/UserTeamPlayers/DeleteByGameweekAndSquad`
  - Method: DELETE

### Transfers Workflow
- **Fetch Available Players:**
  - Endpoint: `/PlayerPositions/available-players-with-positions/${leagueId}/${draftPeriodId}`
  - Method: GET

- **Delete User Squad Player:**
  - Endpoint: `/PlayerPositions/delete-user-squad-player`
  - Method: DELETE

- **Add User Squad Player:**
  - Endpoint: `/PlayerPositions/add-user-squad-player`
  - Method: POST

### Scores Viewing
- **Fetch Leagues by User:**
  - Endpoint: `/Leagues/byUser/{currentUserId}`
  - Method: GET

- **Fetch Gameweek Players:**
  - Endpoint: `/UserTeamPlayers/byUserSquadAndGameweek`
  - Method: GET

- **Fetch Squad Info:**
  - Endpoint: `/UserSquads/{squadId}`
  - Method: GET

- **Fetch All Users:**
  - Endpoint: `/User/all`
  - Method: GET

- **Fetch Player Gameweek Stats:**
  - Endpoint (live score): `/UserTeamPlayers/playerGameweekStatsLiveByGameweekAndSquad?gameweekId={gameweekId}&squadId={squadId}`
  - Endpoint (regular score): `/UserTeamPlayers/playerGameweekStatsByGameweekAndSquad?gameweekId={gameweekId}&squadId={squadId}`
  - Method: GET

- **Fetch Positions:**
  - Endpoint: `/PlayerPositions/positions`
  - Method: GET

### Settings Page Functionalities
- **Create League:**
  - Endpoint: `/Leagues/create`
  - Method: POST

- **Create Draft Period:**
  - Endpoint: `/DraftPeriods`
  - Method: POST

- **Populate Gameweeks:**
  - Endpoint: `/Gameweeks/populate`
  - Method: POST

- **Populate Fixtures:**
  - Endpoint: `/Fixtures/populate`
  - Method: POST

- **Populate All Players:**
  - Endpoint: `/Players/populateOrUpdate`
  - Method: POST

- **Update All Player Stats:**
  - Endpoint: `/PlayerGameweekStats/PopulateAllPlayers`
  - Method: POST

- **Refresh Player Stats for a Gameweek:**
  - Endpoint: `/PlayerGameweekStatsLive/populate/{gameweekId}`
  - Method: POST

- **Fetch Leagues:**
  - Endpoint: `/Leagues`
  - Method: GET

- **Fetch Users:**
  - Endpoint: `/User/all`
  - Method: GET

- **Fetch Draft Periods:**
  - Endpoint: `/DraftPeriods`
  - Method: GET

- **Fetch Gameweeks by Draft Period:**
  - Endpoint: `/Gameweeks/by-draft-period/{draftPeriodId}`
  - Method: GET

- **Fetch Squad Info:**
  - Endpoint: `/UserSquads/{squadId}`
  - Method: GET

- **Fetch Squad Players:**
  - Endpoint: `/PlayerPositions/user-squad-players/{squadId}`
  - Method: GET

- **Fetch Positions:**
  - Endpoint: `/PlayerPositions/positions`
  - Method: GET

- **Fetch Squad ID:**
  - Endpoint: `/UserSquads/ByLeagueDraftPeriodAndUser/{leagueId}/{draftPeriodId}/{currentUserId}`
  - Method: GET

### Player Positions Editing Screen
- **Fetch Players:**
  - Endpoint: `/PlayerPositions/players-with-positions`
  - Method: GET

- **Fetch Positions:**
  - Endpoint: `/PlayerPositions/positions`
  - Method: GET

- **Save Player Positions:**
  - Endpoint: `/PlayerPositions/upsert`
  - Method: POST

### Authentication
- **Login:**
  - Endpoint: `/User/login`
  - Method: POST
  - Request Body:
    ```json
    {
      "username": "user",
      "password": "password"
    }
    ```

- **Register New User:**
  - Endpoint: `/User/register`
  - Method: POST
  - Request Body:
    ```json
    {
      "username": "user",
      "password": "password",
      "email": "user@example.com"
    }
    ```

## Data Storage
- Use session storage instead of local storage for storing user data.

## Error Handling
- In general, errors should be displayed in a div under the navigation bar.

## Deployment
- The application will be deployed as an Azure Static Web App from a GitHub repository.

## Conclusion
This specification document covers the entire scope of the Premier League Fantasy Football front-end web app, including user roles, UI design, key workflows, detailed functionalities, and deployment strategies. Use this document to guide the development process and ensure all requirements are met.
