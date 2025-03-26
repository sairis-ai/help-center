# Working with Knowledge (RAG & Information Domains in Sairis)   
**Prompt Engineering 108**   
 
## Introduction   
AI is only as powerful as the knowledge it has access to. In Sairis, users can **control and refine AI knowledge retrieval** by leveraging **retrieval-augmented generation (RAG)** and selecting specific **knowledge bases and files** that AI can search.   
 
Understanding how **RAG differs from built-in AI knowledge** and how to **manage information domains effectively** ensures that AI delivers **accurate, relevant, and business-aligned responses.**   
 
 
### Learning Objectives   
 
This article will help you:   

1. **Understand how RAG works in Sairis and how it differs from static AI knowledge**  
Learn the mechanics of knowledge retrieval vs. pre-existing AI knowledge.   
 
1. **Select and manage AI-searchable knowledge bases**  
Control which sources AI can reference for dynamic knowledge retrieval.   
 
1. **Optimize RAG-powered AI interactions for accuracy and reliability**  
Ensure AI pulls relevant and trustworthy information.   
 
 
## What is Retrieval-Augmented Generation (RAG)?   
 
RAG is an **AI-powered search capability** that enables **retrieval of external knowledge** from **selected data sources** instead of relying solely on the AI's pre-trained knowledge. This allows AI to:   
 
**Access real-time company-specific data** rather than relying on outdated or general knowledge.   
**Provide citations and references** from approved sources, improving credibility.   
**Enhance business-specific responses** by searching internal documents, policies, and manuals.   
 
> **How RAG Works in Sairis:**   
> 1. The user selects **which knowledge bases and files** the AI can search.   
> 2. The AI retrieves **relevant information** when responding to prompts.   
> 3. The AI **integrates the retrieved data** into its generated response.   
 
 
## How RAG Differs from Built-in AI Knowledge   
 
| **Feature** | **RAG (Retrieval-Augmented Generation)** | **Built-in AI Knowledge** | 
|:-----------|:---------------------------------|:--------------------| 
| **Source** | Selectable knowledge bases, documents, or databases | AI's pre-trained general knowledge | 
| **Customization** | Fully controlled by the user | Limited to what the AI model was trained on | 
| **Updates** | Dynamically pulls the latest information | Static until the AI model is retrained | 
| **Scope** | Business-specific knowledge retrieval | Broader, general knowledge | 
 
> **Example of RAG vs. AI Knowledge:**   
> **User Input:** "What is our company's current PTO policy?"   
> - **Without RAG:** AI provides **general knowledge** about PTO policies.   
> - **With RAG enabled:** AI retrieves **your company's official PTO policy document** and provides a precise answer.   
 
> **Pro Tip:** If AI is giving outdated or incorrect information, check whether a Knowledge Base or Individual Content is selected and if the correct knowledge bases are selected. Review the citations to see where the information is coming, including which file the information came from. It's possible the individual file that Sairis is retrieving information from may be out of date.   
 
 
## Selecting Knowledge Bases in Sairis   
 
Sairis allows users to **choose which knowledge bases** AI can search, ensuring AI only retrieves **approved** and **relevant** information.   
 
### **Steps for Selecting AI-Searchable Knowledge Bases**   
1. **Identify business-critical knowledge** - Determine which **documents, policies, and resources** AI should access.   
2. **Enable RAG for selected sources** - Choose the **knowledge bases and specific files** that AI can reference.   
3. **Set permissions for AI access** - Control who can modify or expand AI-searchable knowledge bases.   
4. **Test AI retrieval accuracy** - Run test queries to confirm AI is pulling relevant information.   
 
> **Example: Enabling RAG for a Sales Team**   
> - A sales manager **enables RAG** for product documentation and pricing sheets.   
> - When sales reps ask AI for product specs, it retrieves **official data** instead of guessing.   
> - Responses remain **accurate, up-to-date, and sales-approved.**   
 
 
## Optimizing AI Knowledge Retrieval   
 
To **ensure AI delivers high-quality responses**, follow these best practices when enabling RAG in Sairis:   
 
### **1. Keep Knowledge Bases Organized**   
- **Tag and categorize documents** for easy searchability.   
- **Group related knowledge bases** (e.g., HR policies, IT support, Sales FAQs).   
- **Avoid redundant or conflicting sources** to prevent inaccurate retrieval.   
 
### **2. Enable RAG Selectively**   
- **Allow AI to search only necessary files**-too much data can lead to irrelevant results.   
- **Restrict access to confidential knowledge** when needed.   
- **Regularly audit which sources are AI-searchable** to maintain relevance.   
 
### **3. Use RAG in Combination with Prompt Engineering**   
- **Pair retrieval with structured prompts** for precision.   
- **Provide context within the prompt** to guide AI in interpreting retrieved information.   
- **Test AI outputs regularly** to refine search accuracy.   
 
> **Pro Tip:** If AI retrieves **irrelevant** or **incomplete** results, refine the **knowledge base selection** or adjust your **prompt clarity.**   
 
 
## Examples in Practice   
 
### **Example 1: Using RAG for HR Policy Questions**   
> **Michael wants AI to pull directly from his company's HR policy knowledge base.**   
> ``` 
> User: "What is our maternity leave policy?"   
> AI: "Retrieving the latest HR policy document...   
> Based on the current policy, employees are eligible for 12 weeks of paid maternity leave, with an option for an additional 4 weeks unpaid."   
> ```   
> **AI provides an up-to-date answer, eliminating the risk of outdated information.**   
 
 
### **Example 2: RAG-Powered Customer Support Assistance**   
> **Lisa sets up RAG for her customer support team to enable AI-powered troubleshooting.**   
> ``` 
> User: "How do I reset my password?"   
> AI: "Retrieving the latest IT support guide...   
> To reset your password:   
> 1. Go to the company login page.   
> 2. Click 'Forgot Password.'   
> 3. Follow the reset instructions sent to your email."   
> ```   
> **Since Lisa enabled RAG, the AI provides step-by-step instructions directly from the IT support manual.**   
 
 
## **Key Takeaways**   
 
- **RAG allows AI to pull relevant knowledge from user-selected sources**, ensuring responses are business-specific.   
- **Unlike built-in AI knowledge, RAG retrieves up-to-date company-specific data**, reducing misinformation.   
- **Users control which knowledge bases and files AI can access**, improving precision and security.   
- **Optimizing RAG search settings ensures AI provides reliable, accurate, and useful responses.**   
 
By effectively managing **AI knowledge retrieval in Sairis**, organizations can **streamline information access, enhance AI reliability, and empower teams with instant, accurate insights.**  