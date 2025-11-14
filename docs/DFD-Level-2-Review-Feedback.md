# Level 2 DFD - Review & Feedback System (Process 5.0)

## Review Submission Flow

```mermaid
flowchart TB
    User[👤 USER<br/>Donor/Recipient]
    
    subgraph Eligibility["ELIGIBILITY CHECK"]
        P51[5.1<br/>VALIDATE REVIEW<br/>ELIGIBILITY]
        P52[5.2<br/>VERIFY DONATION<br/>COMPLETION]
    end
    
    subgraph Validation["CONTENT VALIDATION"]
        P53[5.3<br/>VALIDATE REVIEW<br/>CONTENT]
    end
    
    subgraph Storage["STORAGE & PROCESSING"]
        P54[5.4<br/>STORE REVIEW]
        P55[5.5<br/>CALCULATE AVERAGE<br/>RATING]
        P56[5.6<br/>UPDATE USER<br/>STATISTICS]
    end
    
    D5[(D5: Donations)]
    D6[(D6: Reviews)]
    D1[(D1: Users)]
    
    User -->|Review Data<br/>rating, comment<br/>donation_id| P51
    P51 -->|Check eligibility| P52
    P52 -->|Query donation| D5
    D5 -->|Donation details<br/>status, participants| P52
    P52 -->|Verified completed| P53
    P53 -->|Valid content| P54
    P54 -->|Store review| D6
    D6 -->|Review stored| P55
    P55 -->|Calculate stats| D6
    D6 -->|All user reviews| P55
    P55 -->|Average rating| P56
    P56 -->|Update user stats| D1
    D1 -->|Updated| P56
    P56 -->|Confirmation| User
    
    style P51 fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
    style P52 fill:#e67e22,stroke:#d35400,stroke-width:2px,color:#fff
    style P53 fill:#f39c12,stroke:#e67e22,stroke-width:2px,color:#fff
    style P54 fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style P55 fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#fff
    style P56 fill:#1abc9c,stroke:#16a085,stroke-width:2px,color:#fff
    style D5 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D6 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D1 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
```

## Detailed Review Flow

```mermaid
flowchart TD
    Start([User wants to review]) --> CheckAuth{User<br/>authenticated?}
    
    CheckAuth -->|No| Login[Redirect to login]
    Login --> End1([End])
    
    CheckAuth -->|Yes| GetDonation[User selects<br/>completed donation]
    GetDonation --> CheckStatus{Donation<br/>status =<br/>completed?}
    
    CheckStatus -->|No| Error1[Show error:<br/>Only completed donations<br/>can be reviewed]
    Error1 --> End2([End])
    
    CheckStatus -->|Yes| CheckParticipant{User was<br/>participant?}
    CheckParticipant -->|No| Error2[Show error:<br/>You didn't participate<br/>in this donation]
    Error2 --> End2
    
    CheckParticipant -->|Yes| CheckExisting{Review<br/>already<br/>exists?}
    CheckExisting -->|Yes| LoadExisting[Load existing<br/>review for editing]
    CheckExisting -->|No| ShowForm[Show new<br/>review form]
    
    LoadExisting --> ShowForm
    ShowForm --> UserInput[User enters:<br/>- Rating 1-5<br/>- Comment<br/>- Review type]
    
    UserInput --> ValidateForm{Valid<br/>input?}
    ValidateForm -->|No| ShowErrors[Show validation<br/>errors]
    ShowErrors --> UserInput
    
    ValidateForm -->|Yes| CheckSpam{Spam/profanity<br/>check}
    CheckSpam -->|Failed| Error3[Show error:<br/>Inappropriate content]
    Error3 --> UserInput
    
    CheckSpam -->|Passed| SaveReview[Save review to<br/>database]
    SaveReview --> CalcRating[Calculate average<br/>rating for reviewee]
    
    CalcRating --> UpdateUser[Update user<br/>statistics]
    UpdateUser --> SendNotif[Send notification<br/>to reviewee]
    
    SendNotif --> Success[Show success<br/>message]
    Success --> End3([End])
    
    style Start fill:#4caf50,stroke:#388e3c,stroke-width:2px,color:#fff
    style End1 fill:#f44336,stroke:#d32f2f,stroke-width:2px,color:#fff
    style End2 fill:#f44336,stroke:#d32f2f,stroke-width:2px,color:#fff
    style End3 fill:#4caf50,stroke:#388e3c,stroke-width:2px,color:#fff
    style CheckAuth fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckStatus fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckParticipant fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckExisting fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style ValidateForm fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckSpam fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
```

## Review Types and Permissions

```mermaid
flowchart LR
    subgraph ReviewTypes["Review Types"]
        RT1[Donor → Recipient]
        RT2[Recipient → Donor]
        RT3[Volunteer Review]
        RT4[Platform Review]
    end
    
    subgraph Permissions["Who Can Review"]
        P1[Donors:<br/>Review recipients<br/>they funded]
        P2[Recipients:<br/>Review donors<br/>who funded them]
        P3[Volunteers:<br/>Review donations<br/>they coordinated]
        P4[All Users:<br/>Review platform<br/>experience]
    end
    
    RT1 --> P1
    RT2 --> P2
    RT3 --> P3
    RT4 --> P4
    
    style RT1 fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
    style RT2 fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style RT3 fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#fff
    style RT4 fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#fff
```

## Process Details

### 5.1 Validate Review Eligibility
- **Input**: user_id, donation_id, review_type
- **Checks**:
  - User is authenticated
  - Donation exists
  - User was participant in donation
  - Appropriate review_type for user role
  - User hasn't already reviewed this donation
- **Output**: Eligible/Not Eligible + reason

### 5.2 Verify Donation Completion
- **Input**: donation_id
- **Process**:
  - Query donations collection by ID
  - Check status field
  - Verify status = "completed"
  - Extract donor_id and recipient_id
  - Confirm user_id matches participant
- **Output**: Donation details, participant confirmation

### 5.3 Validate Review Content
- **Input**: rating, comment, review_type
- **Validations**:
  - Rating: Integer between 1-5
  - Comment: 
    - Minimum 10 characters
    - Maximum 500 characters
    - No profanity/spam (basic filter)
  - review_type: Valid type from enum
  - Optional: Sentiment analysis
- **Output**: Valid/Invalid + error messages

### 5.4 Store Review
- **Input**: Validated review data
- **Process**:
  - Generate unique review ID
  - Create review document:
    ```json
    {
      "_id": "ObjectId",
      "user_id": "reviewer_id",
      "donation_id": "donation_id",
      "rating": 5,
      "comment": "Great experience!",
      "review_type": "donor_to_recipient",
      "is_public": true,
      "created_at": "timestamp",
      "helpful_count": 0,
      "flagged": false
    }
    ```
  - Insert into reviews collection
- **Output**: Review ID, timestamp

### 5.5 Calculate Average Rating
- **Input**: user_id (reviewee), review_type
- **Process**:
  - Query all reviews for user_id
  - Filter by review_type
  - Calculate average of rating field
  - Round to 1 decimal place
  - Count total reviews
- **Output**: Average rating, review count

### 5.6 Update User Statistics
- **Input**: user_id, average_rating, review_count
- **Process**:
  - Update user document in users collection
  - Add/update fields:
    - average_rating
    - total_reviews
    - last_reviewed_at
  - Update profile collection (donors/recipients)
  - Add rating badge if applicable
- **Output**: Update confirmation

## Rating Calculation Example

```mermaid
graph TD
    subgraph Reviews["User's Received Reviews"]
        R1[Review 1: ⭐⭐⭐⭐⭐ 5]
        R2[Review 2: ⭐⭐⭐⭐ 4]
        R3[Review 3: ⭐⭐⭐⭐⭐ 5]
        R4[Review 4: ⭐⭐⭐⭐ 4]
    end
    
    Reviews --> Calc[Calculate:<br/>5 + 4 + 5 + 4 = 18<br/>18 ÷ 4 = 4.5]
    Calc --> Result[Average Rating:<br/>⭐⭐⭐⭐½ 4.5/5<br/>Based on 4 reviews]
    
    style Calc fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style Result fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#fff
```

## Review Display Logic

```mermaid
flowchart TD
    ViewReviews([User views profile]) --> Filter{Filter<br/>reviews}
    
    Filter -->|All| ShowAll[Display all reviews]
    Filter -->|High ratings| Show45[Display 4-5 star reviews]
    Filter -->|Low ratings| Show12[Display 1-2 star reviews]
    Filter -->|Recent| ShowRecent[Display last 30 days]
    
    ShowAll --> Sort{Sort by}
    Show45 --> Sort
    Show12 --> Sort
    ShowRecent --> Sort
    
    Sort -->|Most recent| SortDate[Order by created_at DESC]
    Sort -->|Highest rated| SortRating[Order by rating DESC]
    Sort -->|Most helpful| SortHelpful[Order by helpful_count DESC]
    
    SortDate --> Paginate[Paginate results<br/>10 per page]
    SortRating --> Paginate
    SortHelpful --> Paginate
    
    Paginate --> Display[Display reviews<br/>with user info]
    Display --> End([End])
    
    style Filter fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style Sort fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
```

## Validation Rules

| Field | Validation | Error Message |
|-------|-----------|---------------|
| rating | Required, Integer 1-5 | "Rating must be between 1 and 5 stars" |
| comment | Min 10, Max 500 chars | "Comment must be 10-500 characters" |
| donation_id | Valid ObjectId, exists | "Invalid donation" |
| user_id | Authenticated user | "Please login to review" |
| review_type | Valid enum value | "Invalid review type" |
| Duplicate | One review per donation | "You already reviewed this donation" |
| Status | Donation completed | "Can only review completed donations" |
| Participant | User in donation | "You didn't participate in this donation" |

## Review Statistics Tracking

```mermaid
graph LR
    A[Review Submitted] --> B[Update Individual Stats]
    B --> C[Increment Review Count]
    C --> D[Recalculate Average Rating]
    D --> E[Update Rating Distribution]
    E --> F[Check for Milestones]
    F --> G[Award Badges/Points]
    G --> H[Update Leaderboard]
    
    style A fill:#4caf50,stroke:#388e3c,stroke-width:2px,color:#fff
    style H fill:#f39c12,stroke:#e67e22,stroke-width:2px,color:#fff
```
