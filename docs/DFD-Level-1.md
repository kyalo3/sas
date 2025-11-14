# Level 1 Data Flow Diagram

```mermaid
flowchart TB
    %% External Entities
    Donor[👤 DONOR]
    Recipient[👥 RECIPIENT]
    Volunteer[🤝 VOLUNTEER]
    Admin[👨‍💼 ADMIN]
    
    %% Main Processes
    subgraph P1[1.0 USER AUTHENTICATION]
        Auth[Register<br/>Login<br/>Token Generation]
    end
    
    subgraph P2[2.0 PROFILE MANAGEMENT]
        Profile[Create/Update<br/>Donor/Recipient/<br/>Volunteer Profiles]
    end
    
    subgraph P3[3.0 DONATION MANAGEMENT]
        Donation[Create<br/>Approve<br/>Fund<br/>Track Donations]
    end
    
    subgraph P4[4.0 NOTIFICATION SYSTEM]
        Notify[Send Status<br/>Updates &<br/>Alerts]
    end
    
    subgraph P5[5.0 REVIEW & FEEDBACK]
        Review[Submit<br/>Reviews &<br/>Ratings]
    end
    
    %% Data Stores
    D1[(D1: Users)]
    D2[(D2: Donors)]
    D3[(D3: Recipients)]
    D4[(D4: Volunteers)]
    D5[(D5: Donations)]
    D6[(D6: Reviews)]
    
    %% Authentication flows
    Donor -->|Login Credentials| P1
    Recipient -->|Registration Data| P1
    Volunteer -->|Login Info| P1
    Admin -->|Admin Credentials| P1
    P1 -->|JWT Token| Donor
    P1 -->|JWT Token| Recipient
    P1 <-->|User Data| D1
    
    %% Profile Management flows
    Donor -->|Profile Data| P2
    Recipient -->|Profile Data| P2
    Volunteer -->|Profile Data| P2
    P2 -->|Profile Confirmation| Donor
    P2 -->|Profile Confirmation| Recipient
    P2 -->|Profile Confirmation| Volunteer
    P2 <-->|Donor Profiles| D2
    P2 <-->|Recipient Profiles| D3
    P2 <-->|Volunteer Profiles| D4
    
    %% Donation Management flows
    Recipient -->|Donation Request| P3
    Admin -->|Approval/Rejection| P3
    Donor -->|Fund Request| P3
    Volunteer -->|Delivery Updates| P3
    P3 -->|Request Status| Recipient
    P3 -->|Approved Donations| Donor
    P3 -->|Active Donations| Volunteer
    P3 -->|Pending Requests| Admin
    P3 <-->|Donation Data| D5
    
    %% Notification flows
    P3 -->|Status Changes| P4
    P1 -->|New User Events| P4
    P4 -->|Notifications| Donor
    P4 -->|Notifications| Recipient
    P4 -->|Notifications| Volunteer
    P4 -->|Notifications| Admin
    P4 -->|Read Status| D1
    
    %% Review flows
    Donor -->|Review Data| P5
    Recipient -->|Rating & Comment| P5
    P5 -->|Review Confirmation| Donor
    P5 -->|Review Confirmation| Recipient
    P5 -->|Verify Completion| D5
    P5 <-->|Review Storage| D6
    P5 -->|Update Statistics| D1
    
    style P1 fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
    style P2 fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style P3 fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#fff
    style P4 fill:#f39c12,stroke:#d68910,stroke-width:2px,color:#fff
    style P5 fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#fff
    style D1 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D2 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D3 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D4 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D5 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D6 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
```

## Process Descriptions

### 1.0 User Authentication
- **Purpose**: Manage user registration and login
- **Inputs**: Email, password, user details
- **Outputs**: JWT access tokens, user authentication status
- **Data Stores**: D1 (Users)

### 2.0 Profile Management
- **Purpose**: Create and maintain user profiles by role
- **Inputs**: Profile information specific to donor/recipient/volunteer
- **Outputs**: Profile confirmation, profile data
- **Data Stores**: D2 (Donors), D3 (Recipients), D4 (Volunteers)

### 3.0 Donation Management
- **Purpose**: Handle complete donation lifecycle
- **Inputs**: Donation requests, approvals, funding commitments
- **Outputs**: Status updates, donation tracking information
- **Data Stores**: D5 (Donations)

### 4.0 Notification System
- **Purpose**: Send real-time updates to users
- **Inputs**: Status changes, system events
- **Outputs**: Notifications to all user types
- **Data Stores**: D1 (Users - for notification preferences)

### 5.0 Review & Feedback
- **Purpose**: Collect and manage user reviews
- **Inputs**: Ratings, comments, feedback
- **Outputs**: Review confirmations, updated statistics
- **Data Stores**: D5 (Donations), D6 (Reviews)
