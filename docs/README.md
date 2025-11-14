# Sustain a Share - Data Flow Diagrams

This directory contains comprehensive Data Flow Diagrams (DFD) for the Sustain a Share food donation platform.

## 📁 Files

### Context & Overview
- **[DFD-Context-Diagram.md](DFD-Context-Diagram.md)** - Level 0 DFD showing the entire system and external entities
- **[DFD-Level-1.md](DFD-Level-1.md)** - Level 1 DFD breaking down the system into 5 major processes

### Detailed Process Flows
- **[DFD-Level-2-Authentication.md](DFD-Level-2-Authentication.md)** - User registration, login, and token validation flows
- **[DFD-Level-2-Donation-Management.md](DFD-Level-2-Donation-Management.md)** - Complete donation lifecycle from request to completion
- **[DFD-Level-2-Profile-Management.md](DFD-Level-2-Profile-Management.md)** - Profile creation and management for all user types
- **[DFD-Level-2-Review-Feedback.md](DFD-Level-2-Review-Feedback.md)** - Review submission and rating calculation system

## 🎨 Viewing the Diagrams

These diagrams are created using **Mermaid** syntax and can be viewed:

### GitHub
Simply open any `.md` file on GitHub - diagrams render automatically

### VS Code
Install the [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) extension

### Online Editors
- [Mermaid Live Editor](https://mermaid.live/)
- Copy the code block and paste to visualize

### Local Rendering
Use any Markdown viewer that supports Mermaid, such as:
- Typora
- Mark Text
- GitBook

## 📊 DFD Hierarchy

```
Level 0 (Context Diagram)
    │
    ├── Level 1 (5 Major Processes)
    │   │
    │   ├── 1.0 User Authentication
    │   │   └── Level 2 Details
    │   │       ├── 1.1 Validate Registration
    │   │       ├── 1.2 Hash Password & Create User
    │   │       ├── 1.3 Generate JWT Token
    │   │       ├── 1.4 Verify Credentials
    │   │       ├── 1.5 Verify Password
    │   │       └── 1.6-1.9 Token Validation
    │   │
    │   ├── 2.0 Profile Management
    │   │   └── Level 2 Details
    │   │       ├── 2.1-2.2 Donor Profile
    │   │       ├── 2.3-2.4 Recipient Profile
    │   │       └── 2.5-2.6 Volunteer Profile
    │   │
    │   ├── 3.0 Donation Management
    │   │   └── Level 2 Details
    │   │       ├── 3.1 Validate Request
    │   │       ├── 3.2 Create Donation
    │   │       ├── 3.3 Review Request
    │   │       ├── 3.4 Approve
    │   │       ├── 3.5 Reject
    │   │       ├── 3.6 Process Funding
    │   │       ├── 3.7 Update Status
    │   │       └── 3.8 Track Delivery
    │   │
    │   ├── 4.0 Notification System
    │   │
    │   └── 5.0 Review & Feedback
    │       └── Level 2 Details
    │           ├── 5.1 Validate Eligibility
    │           ├── 5.2 Verify Completion
    │           ├── 5.3 Validate Content
    │           ├── 5.4 Store Review
    │           ├── 5.5 Calculate Rating
    │           └── 5.6 Update Statistics
```

## 🗄️ Data Stores

| ID | Name | Description |
|----|------|-------------|
| D1 | Users | Authentication and user account data |
| D2 | Donors | Extended donor profile information |
| D3 | Recipients | Extended recipient profile information |
| D4 | Volunteers | Extended volunteer profile information |
| D5 | Donations | Donation requests and tracking |
| D6 | Reviews | User reviews and ratings |

## 👥 External Entities

- **DONOR** - Individuals/organizations providing food donations
- **RECIPIENT** - Families/individuals requesting food assistance
- **VOLUNTEER** - People coordinating donation deliveries
- **ADMIN** - System administrators managing approvals

## 🔄 Key Processes

### 1.0 User Authentication
Handles user registration, login, and JWT token management

### 2.0 Profile Management
Creates and maintains role-specific user profiles

### 3.0 Donation Management
Manages entire donation lifecycle from request to completion

### 4.0 Notification System
Sends status updates and alerts to users

### 5.0 Review & Feedback
Collects and processes user reviews and ratings

## 📈 Data Flow Patterns

### Linear Flow
```
User Input → Validation → Processing → Storage → Confirmation
```

### Conditional Flow
```
Request → Review → {Approve | Reject} → Update Status → Notify
```

### Circular Flow
```
Create → Store → Retrieve → Update → Store
```

## 🎯 How to Use These Diagrams

### For Developers
- Understand data flow between components
- Identify validation points and business logic
- See integration points with database
- Plan API endpoint structure

### For Testers
- Identify test scenarios
- Understand expected inputs/outputs
- Verify data transformations
- Check error handling paths

### For Project Managers
- Visualize system functionality
- Understand user interactions
- Plan feature dependencies
- Communicate with stakeholders

### For Documentation
- Reference for technical documentation
- Training materials for new team members
- System architecture presentations
- Compliance and audit requirements

## 🚀 Quick Reference

| Task | Diagram to View |
|------|----------------|
| Understand overall system | Context Diagram |
| See main processes | Level 1 DFD |
| User login/registration | Level 2 Authentication |
| Donation workflow | Level 2 Donation Management |
| Profile creation | Level 2 Profile Management |
| Review system | Level 2 Review & Feedback |

## 📝 Conventions Used

- **Rectangles** - External entities (users, systems)
- **Rounded Rectangles** - Processes/functions
- **Cylinders** - Data stores (databases)
- **Arrows** - Data flow direction
- **Colors** - Process categorization
  - Red: Authentication
  - Blue: Profile Management
  - Green: Donation Management
  - Orange: Notifications
  - Purple: Reviews

## 🔗 Related Documentation

- [Main README](../README.md) - Project overview and setup
- [API Documentation](../README.md#-api-endpoints) - REST API reference
- [Database Schema](../README.md#-database-schema) - MongoDB collections

## 📞 Questions?

For questions about these diagrams or the system architecture, please:
1. Check the main [README.md](../README.md)
2. Review the [API Documentation](../README.md#-api-endpoints)
3. Open an issue on GitHub
4. Contact the development team

---

**Last Updated**: November 14, 2025  
**Version**: 1.0  
**Maintainer**: Sustain a Share Development Team
