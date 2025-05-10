First the user signs up with his username and savings plan then it gets stored in the localstorage and the user can see his savings plan and can also update it.

## Project Overview
This application allows users to sign up with a username and select a savings plan (tier). The user's information is stored in localStorage, and after logging in, the user can view their savings dashboard, see their plan details, and interact with group savings features.

### `/src/page/Auth.tsx`
- **Purpose:** Handles user authentication and registration.
- **How it works:**
  - Presents a form for the user to enter a username and select a savings tier (Tier 1, 2, or 3).
  - Each tier has a predefined balance and interest percentage.
  - On form submission, the username and selected savings plan are saved to localStorage as `userData`.
  - After successful login, the user is redirected to the dashboard.

### `/src/page/Dashboard.tsx`
- **Purpose:** Displays the user's savings dashboard and group savings data.
- **How it works:**
  - Checks if the user is logged in; if not, nothing is rendered.
  - On mount or when user data changes, the user is added to the appropriate group (tier) if not already present.
  - Shows a welcome message and the user's savings plan details (tier and interest percentage).
  - Provides a **Withdraw** button, allowing the user to withdraw from their group (removing them and updating group data).
  - Displays a table for each tier, listing all members, their initial deposit, current balance, and accumulated interest (difference between balance and initial deposit).
  - All balances are displayed in Naira (₦).

### `/src/App.tsx`
- **Purpose:** Main entry point that manages authentication state and renders the appropriate components.
- **How it works:**
  - Uses React state to track if the user is logged in and to store user data.
  - On mount, checks localStorage for existing user data and updates state accordingly.
  - Renders the `Auth` component if the user is not logged in, and the `Dashboard` component if the user is logged in.

---

**Summary:**
- Users sign up and select a savings plan in `Auth.tsx`.
- User data is stored in localStorage and managed in `App.tsx`.
- The dashboard in `Dashboard.tsx` shows savings details, group membership, and allows withdrawals, updating the group data accordingly.

This flow ensures a simple onboarding and savings management experience for users, with persistent data and interactive group features.

---

<mcfile name="Auth.tsx" path="src/page/Auth.tsx"></mcfile>
<mcfile name="Dashboard.tsx" path="src/page/Dashboard.tsx"></mcfile>
<mcfile name="App.tsx" path="src/App.tsx"></mcfile>