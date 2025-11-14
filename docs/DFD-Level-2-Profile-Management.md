# Level 2 DFD - Profile Management (Process 2.0)

## Donor Profile Management

```mermaid
flowchart TB
    Donor[👤 DONOR]
    
    subgraph DonorFlow["DONOR PROFILE"]
        P21[2.1<br/>VALIDATE DONOR<br/>PROFILE]
        P22[2.2<br/>CREATE/UPDATE<br/>DONOR PROFILE]
    end
    
    D2[(D2: Donors)]
    D1A[(D1: Users)]
    
    Donor -->|Profile Data<br/>name, company<br/>phone, services| P21
    P21 -->|Verify user_id| D1A
    D1A -->|User exists| P21
    P21 -->|Valid Profile| P22
    P22 -->|Store/Update| D2
    D2 -->|Profile Confirmation| P22
    P22 -->|Success Message| Donor
    
    style P21 fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
    style P22 fill:#c0392b,stroke:#a93226,stroke-width:2px,color:#fff
    style D2 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D1A fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
```

## Recipient Profile Management

```mermaid
flowchart TB
    Recipient[👥 RECIPIENT]
    
    subgraph RecipientFlow["RECIPIENT PROFILE"]
        P23[2.3<br/>VALIDATE RECIPIENT<br/>PROFILE]
        P24[2.4<br/>CREATE/UPDATE<br/>RECIPIENT PROFILE]
    end
    
    D3[(D3: Recipients)]
    D1B[(D1: Users)]
    
    Recipient -->|Profile Data<br/>name, address<br/>family_size| P23
    P23 -->|Verify user_id| D1B
    D1B -->|User exists| P23
    P23 -->|Valid Profile| P24
    P24 -->|Store/Update| D3
    D3 -->|Profile Confirmation| P24
    P24 -->|Success Message| Recipient
    
    style P23 fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style P24 fill:#2980b9,stroke:#21618c,stroke-width:2px,color:#fff
    style D3 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D1B fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
```

## Volunteer Profile Management

```mermaid
flowchart TB
    Volunteer[🤝 VOLUNTEER]
    
    subgraph VolunteerFlow["VOLUNTEER PROFILE"]
        P25[2.5<br/>VALIDATE VOLUNTEER<br/>PROFILE]
        P26[2.6<br/>CREATE/UPDATE<br/>VOLUNTEER PROFILE]
    end
    
    D4[(D4: Volunteers)]
    D1C[(D1: Users)]
    
    Volunteer -->|Profile Data<br/>name, availability<br/>skills, transport| P25
    P25 -->|Verify user_id| D1C
    D1C -->|User exists| P25
    P25 -->|Valid Profile| P26
    P26 -->|Store/Update| D4
    D4 -->|Profile Confirmation| P26
    P26 -->|Success Message| Volunteer
    
    style P25 fill:#9b59b6,stroke:#8e44ad,stroke-width:2px,color:#fff
    style P26 fill:#8e44ad,stroke:#7d3c98,stroke-width:2px,color:#fff
    style D4 fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style D1C fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
```

## Unified Profile Management Flow

```mermaid
flowchart TD
    Start([User logged in]) --> CheckProfile{Profile<br/>exists?}
    
    CheckProfile -->|Yes| LoadProfile[Load existing<br/>profile data]
    CheckProfile -->|No| ShowForm[Show profile<br/>creation form]
    
    LoadProfile --> DisplayEdit[Display profile<br/>with edit option]
    DisplayEdit --> UserEdit{User wants<br/>to edit?}
    
    UserEdit -->|No| End1([Profile displayed])
    UserEdit -->|Yes| ShowForm
    
    ShowForm --> UserFill[User fills<br/>form fields]
    UserFill --> Validate[Validate input<br/>data]
    
    Validate --> V1{Valid?}
    V1 -->|No| ShowError[Show validation<br/>errors]
    ShowError --> UserFill
    
    V1 -->|Yes| CheckDuplicate{Profile already<br/>exists for user?}
    
    CheckDuplicate -->|Yes| Update[Update existing<br/>profile]
    CheckDuplicate -->|No| Create[Create new<br/>profile]
    
    Update --> SaveDB[Save to database]
    Create --> SaveDB
    
    SaveDB --> Success{Save<br/>successful?}
    Success -->|No| ShowError2[Show error<br/>message]
    Success -->|Yes| Confirm[Show success<br/>confirmation]
    
    ShowError2 --> End2([End])
    Confirm --> Refresh[Refresh dashboard<br/>with profile data]
    Refresh --> End3([End])
    
    style Start fill:#4caf50,stroke:#388e3c,stroke-width:2px,color:#fff
    style End1 fill:#2196f3,stroke:#1976d2,stroke-width:2px,color:#fff
    style End2 fill:#f44336,stroke:#d32f2f,stroke-width:2px,color:#fff
    style End3 fill:#4caf50,stroke:#388e3c,stroke-width:2px,color:#fff
    style V1 fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckProfile fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style CheckDuplicate fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
    style Success fill:#ff9800,stroke:#f57c00,stroke-width:2px,color:#fff
```

## Process Details

### 2.1 Validate Donor Profile
- **Input**: 
  - user_id (from JWT token)
  - first_name, last_name, title
  - phone_number
  - company, type_of_company
  - services_interested_in
  - participating_locations
  
- **Validations**:
  - user_id exists in Users collection
  - User role is "donor"
  - Phone number format valid
  - All required fields present
  - Company name min 2 characters
  
- **Output**: Valid/Invalid + error details

### 2.2 Create/Update Donor Profile
- **Input**: Validated donor data
- **Process**:
  - Check if profile exists for user_id
  - If exists: Update with new data + updated_at timestamp
  - If not exists: Create new with created_at timestamp
  - Calculate total_donations (count)
  - Calculate total_amount_donated (sum)
- **Output**: Profile ID, confirmation

### 2.3 Validate Recipient Profile
- **Input**:
  - user_id (from JWT token)
  - first_name, last_name
  - phone_number, address
  - family_size, household_members
  - income_level, special_needs
  
- **Validations**:
  - user_id exists in Users collection
  - User role is "recipient"
  - Phone number format valid
  - Address min 10 characters
  - family_size > 0
  
- **Output**: Valid/Invalid + error details

### 2.4 Create/Update Recipient Profile
- **Input**: Validated recipient data
- **Process**:
  - Check if profile exists for user_id
  - If exists: Update with new data + updated_at
  - If not exists: Create new with created_at
  - Calculate total_requests (count)
  - Calculate requests_fulfilled (count where status=completed)
- **Output**: Profile ID, confirmation

### 2.5 Validate Volunteer Profile
- **Input**:
  - user_id (from JWT token)
  - first_name, last_name
  - phone_number
  - availability, areas_of_interest
  - transportation (boolean)
  - emergency_contact
  
- **Validations**:
  - user_id exists in Users collection
  - User role is "volunteer"
  - Phone number format valid
  - Availability field not empty
  - Emergency contact provided
  
- **Output**: Valid/Invalid + error details

### 2.6 Create/Update Volunteer Profile
- **Input**: Validated volunteer data
- **Process**:
  - Check if profile exists for user_id
  - If exists: Update with new data + updated_at
  - If not exists: Create new with created_at
  - Initialize hours_volunteered = 0
  - Initialize tasks_completed = 0
- **Output**: Profile ID, confirmation

## Field Validation Rules

### Donor Profile
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| first_name | String | Yes | Min 2, Max 50 chars |
| last_name | String | Yes | Min 2, Max 50 chars |
| title | String | No | Mr., Mrs., Ms., Dr., etc. |
| phone_number | String | Yes | Valid phone format |
| company | String | Yes | Min 2 chars |
| type_of_company | String | No | Category |
| services_interested_in | String | Yes | Comma-separated |
| participating_locations | String | Yes | Comma-separated |

### Recipient Profile
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| first_name | String | Yes | Min 2, Max 50 chars |
| last_name | String | Yes | Min 2, Max 50 chars |
| phone_number | String | Yes | Valid phone format |
| address | String | Yes | Min 10 chars |
| family_size | Integer | Yes | > 0 |
| household_members | String | No | Description |
| income_level | String | No | low/medium/high |
| special_needs | String | No | Dietary restrictions |

### Volunteer Profile
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| first_name | String | Yes | Min 2, Max 50 chars |
| last_name | String | Yes | Min 2, Max 50 chars |
| phone_number | String | Yes | Valid phone format |
| availability | String | Yes | Not empty |
| areas_of_interest | String | Yes | Not empty |
| transportation | Boolean | Yes | true/false |
| emergency_contact | String | Yes | Min 10 chars |

## Profile Retrieval Methods

```mermaid
flowchart LR
    API[API Request]
    
    API --> M1[Get by Profile ID]
    API --> M2[Get by User ID]
    API --> M3[Get All Profiles]
    
    M1 --> D[(Database)]
    M2 --> D
    M3 --> D
    
    D --> R1[Single Profile]
    D --> R2[Single Profile]
    D --> R3[Profile List]
    
    R1 --> Response[JSON Response]
    R2 --> Response
    R3 --> Response
    
    style API fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    style D fill:#34495e,stroke:#2c3e50,stroke-width:2px,color:#fff
    style Response fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#fff
```
