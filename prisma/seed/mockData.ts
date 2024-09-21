import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a98ad5e9-0bc7-4730-aaa7-d5eae186a372', '1Desmond.Dicki49@yahoo.com', 'Michael Brown', 'The Real' , 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('51f352df-65a1-46c0-9136-1990f7c200d3', '10Adolf.Mann@yahoo.com', 'Emily Jones', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=12', 'def456', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('35c175f1-ce33-4fd9-ad59-1f8519d88f79', '19Loyce20@hotmail.com', 'David Wilson', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=21', 'abc123', false, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('10651f8b-b764-42b4-a80f-b6c732fb6e70', '28Colton93@gmail.com', 'Emily Jones', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=30', 'def456', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('015eb9c6-4694-40f8-ae64-5820a393c680', '37Jessica.Dare@gmail.com', 'John Doe', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=39', 'abc123', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2319b86c-c2a8-4304-8d98-95ca08653128', '46Johnson.Kunde@hotmail.com', 'John Doe', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=48', 'def456', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('5d5ed79f-f563-4356-858c-8e9d6c303d52', '55Kitty_Treutel58@hotmail.com', 'David Wilson', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=57', 'jkl012', false, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('9b3d02a0-9e49-484e-920a-378bfa1c3725', '64Amparo13@yahoo.com', 'Jane Smith','The Real', 'https://i.imgur.com/YfJQV5z.png?id=66', 'abc123', true, 'VERIFIED', 'USER', 'TestingPW');
INSERT INTO "User" ("id", "email", "name", "organizationName", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e8253444-7e54-4030-ac14-95a722e10788', '73Kailey.Frami85@yahoo.com', 'Emily Jones', 'The Real', 'https://i.imgur.com/YfJQV5z.png?id=75', 'def456', false, 'VERIFIED', 'USER', 'TestingPW');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6601b9f8-930b-47f2-99ef-9abcdd20f362', 'z9y8x7w6v5u4t3s2r1q0', '{"apostolus":"ab","volo":"texo","desparatus":"ipsum","adsum":"deficio","amita":"vivo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d7fef1a9-2a7c-4c99-82fc-f82ad298c358', 'a1b2c3d4e5f6g7h8i9j0', '{"vitium":"audio","cogito":"corrigo","civis":"caveo","denique":"alter","occaecati":"dicta"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3567a635-6001-4b18-a392-21c1e4bf9a9e', 'z9y8x7w6v5u4t3s2r1q0', '{"circumvenio":"varietas","ars":"vivo","incidunt":"baiulus","comedo":"attero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4207c01a-2017-4061-8f28-8920f0227e92', 'k9l8m7n6o5p4q3r2s1t0', '{"corpus":"spargo","denego":"deleniti","caste":"antiquus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('92073988-bd1e-4061-a9c7-18bff0fcb05c', 'm1n2o3p4q5r6s7t8u9v0', '{"vos":"repellat","explicabo":"capitulus","comparo":"curto","ventus":"unde"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6e727ada-0407-47bd-bf12-0138525a126f', 'z9y8x7w6v5u4t3s2r1q0', '{"absconditus":"temptatio","viduo":"adduco","sumptus":"cohors","tempora":"turpis","confido":"cupio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b2433979-85f4-443b-8c53-36caef7d9c65', 'k9l8m7n6o5p4q3r2s1t0', '{"cupressus":"spiculum","bibo":"tendo","vilicus":"quas","solus":"termes"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0f2796bd-1b89-4277-b41c-5f03b82a1b2c', 'a1b2c3d4e5f6g7h8i9j0', '{"quae":"trans","agnosco":"ullus","ulterius":"deprimo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('da983f20-bc31-4ae2-845a-c9c4a81ef023', 'a1b2c3d4e5f6g7h8i9j0', '{"beatus":"vitiosus","concedo":"verbera","stillicidium":"aufero"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9f722549-f04d-4702-affd-e6b14cfe9bce', 'm1n2o3p4q5r6s7t8u9v0', '{"vito":"solutio","velut":"caelum","crur":"cogito","teneo":"aestivus","conturbo":"demergo"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e7c3c598-6117-4961-b0a5-0e859d8c6cfe', 'Trees for Tomorrow', 'https://i.imgur.com/YfJQV5z.png?id=122');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8461bcf4-23e8-4a0d-939f-f672c893b212', 'Green Earth Initiative', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1ff4aa81-427f-4132-892f-06a6a5db7e7f', 'Natures Guardians', 'https://i.imgur.com/YfJQV5z.png?id=128');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'Green Earth Initiative', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d4ecdc14-f805-428a-9d17-53082b0133ff', 'Natures Guardians', 'https://i.imgur.com/YfJQV5z.png?id=134');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('aca2de80-ed49-4397-ba15-6d10134bf7a1', 'Urban Forest Alliance', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('265ea740-d29f-4ffc-b65c-7e213cded676', 'Natures Guardians', 'https://i.imgur.com/YfJQV5z.png?id=140');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6f623009-302d-41cb-818b-01c8b5ee2361', 'Green Earth Initiative', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a4a6b367-0014-493e-b8dd-fac125bee75e', 'Natures Guardians', 'https://i.imgur.com/YfJQV5z.png?id=146');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('31c0db29-f954-4b29-8be9-b1d176b880df', 'Green Earth Initiative', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8289f5c1-16fa-4980-96e6-a649ca5cc4e1', 'Urban Forest Advocates', 'a98ad5e9-0bc7-4730-aaa7-d5eae186a372', '1ff4aa81-427f-4132-892f-06a6a5db7e7f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e950b966-e0ef-4a8e-8b93-7b5788075f0f', 'Sustainable Growth Partners', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a4a6b367-0014-493e-b8dd-fac125bee75e');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('04880621-d60f-49a6-b2a6-c74ca78375e8', 'Tree Planters United', '015eb9c6-4694-40f8-ae64-5820a393c680', '31c0db29-f954-4b29-8be9-b1d176b880df');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c704f565-ee0f-45f4-b669-36becd086883', 'Sustainable Growth Partners', '10651f8b-b764-42b4-a80f-b6c732fb6e70', 'e7c3c598-6117-4961-b0a5-0e859d8c6cfe');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f430c464-4edb-4462-9d72-a15d7feb6ace', 'Urban Forest Advocates', '2319b86c-c2a8-4304-8d98-95ca08653128', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('aa2e2d0e-5d11-463d-9774-68a194d7aa47', 'Urban Forest Advocates', 'e8253444-7e54-4030-ac14-95a722e10788', 'e7c3c598-6117-4961-b0a5-0e859d8c6cfe');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fa26b6ca-3ea5-416e-917d-d2d909f81b74', 'Urban Forest Advocates', '015eb9c6-4694-40f8-ae64-5820a393c680', '6f623009-302d-41cb-818b-01c8b5ee2361');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5b0c5839-b3ef-421b-8136-d1dc7ba0b574', 'Tree Planters United', '9b3d02a0-9e49-484e-920a-378bfa1c3725', 'e7c3c598-6117-4961-b0a5-0e859d8c6cfe');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f19ab431-23eb-4461-9020-bd2297e96178', 'Urban Forest Advocates', 'e8253444-7e54-4030-ac14-95a722e10788', '1ff4aa81-427f-4132-892f-06a6a5db7e7f');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9629dbcc-d944-4c50-9b4c-fdf1bf64e039', 'Sustainable Growth Partners', '5d5ed79f-f563-4356-858c-8e9d6c303d52', '6f623009-302d-41cb-818b-01c8b5ee2361');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('05c8728d-7d38-4bb5-8f1b-e16864027932', 'httpsexample.comendpoint3', 'sub_67890', 'a98ad5e9-0bc7-4730-aaa7-d5eae186a372');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('82e3e87d-4778-403a-a920-e05fcecdbffc', 'httpsexample.comendpoint3', 'sub_fghij', '2319b86c-c2a8-4304-8d98-95ca08653128');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('003bcdde-f9f8-42ad-bc28-700e75d834cb', 'httpsexample.comendpoint3', 'sub_abcde', '5d5ed79f-f563-4356-858c-8e9d6c303d52');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('5b6e6e35-a346-4a4a-872e-b597d6ff6154', 'httpsexample.comendpoint1', 'sub_12345', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('8540e5e5-f02e-4865-9e35-8ddff7ab445a', 'httpsexample.comendpoint5', 'sub_67890', '35c175f1-ce33-4fd9-ad59-1f8519d88f79');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('e93e5aa0-2dc2-4488-985d-d4ad8bc92ada', 'httpsexample.comendpoint2', 'sub_fghij', '2319b86c-c2a8-4304-8d98-95ca08653128');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('120cce0c-6836-4989-9a33-77e293a93afb', 'httpsexample.comendpoint1', 'sub_klmno', '9b3d02a0-9e49-484e-920a-378bfa1c3725');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('4b88d3b8-14b9-4958-9170-f014d9438577', 'httpsexample.comendpoint1', 'sub_12345', '9b3d02a0-9e49-484e-920a-378bfa1c3725');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('db60855e-c3b5-46a9-9305-4f0350c4609b', 'httpsexample.comendpoint5', 'sub_abcde', '015eb9c6-4694-40f8-ae64-5820a393c680');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('cc09a4ae-cf9d-48ce-9da0-4ab62d074827', 'httpsexample.comendpoint2', 'sub_abcde', '51f352df-65a1-46c0-9136-1990f7c200d3');

INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('2b95f421-e287-40d3-94b8-c681da915c1d', 'Neighborhood Forest Program', 'Support for ecofriendly urban development.', '15000', '2025-06-23T06:41:55.675Z', '2024-08-08T20:56:33.119Z', 'Open', '8461bcf4-23e8-4a0d-939f-f672c893b212', false, 'Nonprofit organizations', 'Follow the community engagement guidelines.', 'Applications due by June 30 2023.', 'httpecofriendlycitygrant.org', '5555678901', '213Clementine_Jenkins-Roberts48@gmail.com', '214 136 E 13th St, New York, NY 10003', 'Sustainability plan.docx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('768ffeb3-c73f-465a-a18f-135eac5fa790', 'Urban Green Initiative', 'Grant to create and maintain green spaces.', '20000', '2024-12-30T02:09:17.210Z', '2025-06-24T15:50:51.408Z', 'Closed', '31c0db29-f954-4b29-8be9-b1d176b880df', false, 'Municipal governments', 'Follow the community engagement guidelines.', 'Applications due by June 30 2023.', 'httpgreenspacesgrant.org', '5553456789', '229Stone48@yahoo.com', '230 136 E 13th St, New York, NY 10003', 'Sustainability plan.docx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('654c545a-2e4b-475c-8267-100fc46f613f', 'Neighborhood Forest Program', 'A grant aimed at increasing urban green spaces.', '25000', '2024-06-17T00:48:22.045Z', '2025-05-03T09:39:32.356Z', 'Closed', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', false, 'Educational institutions', 'Provide a sustainability report.', 'Applications due by June 30 2023.', 'httpcommunitytreeplantingfund.com', '5554567890', '245Imelda.Cormier@yahoo.com', '246 430 Lafayette St, New York, NY 10003', 'Environmental impact report.pdf');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('54a84830-456e-437a-a106-6483abba3783', 'EcoFriendly City Grant', 'A grant aimed at increasing urban green spaces.', '15000', '2024-06-10T04:28:58.072Z', '2024-04-27T21:12:25.242Z', 'Pending', '8461bcf4-23e8-4a0d-939f-f672c893b212', true, 'Community groups', 'Follow the community engagement guidelines.', 'Project completion by December 31 2023.', 'httpurbangreeninitiative.org', '5552345678', '261Sylvester.Crist51@yahoo.com', '262 430 Lafayette St, New York, NY 10003', 'Budget breakdown.xlsx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('8f51eb1d-5454-4d84-a2ea-a94ea027eea6', 'Community Tree Planting Fund', 'Funding for communityled tree planting projects.', '25000', '2024-02-21T06:06:57.247Z', '2024-10-08T23:47:03.618Z', 'Closed', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', false, 'Municipal governments', 'Submit a detailed project plan.', 'Quarterly progress reports required.', 'httpurbangreeninitiative.org', '5551234567', '277Magnus.Stamm@gmail.com', '278 42 E 20th St, New York, NY 10003', 'Sustainability plan.docx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('ae06ea7c-2102-4333-9c85-f39a9e0ae462', 'Urban Green Initiative', 'Program to enhance neighborhood greenery.', '10000', '2025-05-08T17:13:51.840Z', '2025-02-26T17:25:21.406Z', 'Pending', '8461bcf4-23e8-4a0d-939f-f672c893b212', false, 'Environmental NGOs', 'Ensure compliance with local regulations.', 'Applications due by June 30 2023.', 'httpecofriendlycitygrant.org', '5552345678', '293Lexi55@hotmail.com', '294 136 E 13th St, New York, NY 10003', 'Sustainability plan.docx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('41a2679a-b2b0-4cc1-8f30-bcdfc8976570', 'Neighborhood Forest Program', 'Program to enhance neighborhood greenery.', '20000', '2024-05-26T16:02:20.103Z', '2024-05-29T09:15:53.146Z', 'Pending', 'e7c3c598-6117-4961-b0a5-0e859d8c6cfe', true, 'Municipal governments', 'Provide a sustainability report.', 'Final report due by March 31 2024.', 'httpecofriendlycitygrant.org', '5554567890', '309Kelsie.Powlowski@gmail.com', '310 136 E 13th St, New York, NY 10003', 'Project proposal.pdf');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('cd60f4a8-efa4-406e-b81d-d45c8109765d', 'Neighborhood Forest Program', 'Support for ecofriendly urban development.', '5000', '2025-07-04T04:12:44.581Z', '2025-01-29T00:07:25.412Z', 'Closed', 'd4ecdc14-f805-428a-9d17-53082b0133ff', false, 'Community groups', 'Provide a sustainability report.', 'Quarterly progress reports required.', 'httpecofriendlycitygrant.org', '5555678901', '325Leann.Simonis@gmail.com', '326 443 E 6th St, New York, NY 10009', 'Project proposal.pdf');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('a3495373-cf18-4145-b6a8-aaf32605e9ac', 'Neighborhood Forest Program', 'Grant to create and maintain green spaces.', '25000', '2023-12-24T19:50:06.507Z', '2025-04-21T22:36:32.498Z', 'Closed', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', false, 'Municipal governments', 'Follow the community engagement guidelines.', 'Project completion by December 31 2023.', 'httpecofriendlycitygrant.org', '5552345678', '341Heber_Bergstrom@yahoo.com', '342 91 Christopher St, New York, NY 10014', 'Budget breakdown.xlsx');
INSERT INTO "Grant" ("id", "name", "description", "amount", "startDate", "endDate", "status", "organizationId", "flaggedForReview", "eligibility", "guideline", "timelines", "linkToSite", "grantorPhone", "grantorEmail", "grantorAddress", "supportingDocs") VALUES ('a7ad9412-ff0f-4672-a708-989254932e8a', 'Community Tree Planting Fund', 'Grant to create and maintain green spaces.', '20000', '2024-09-22T16:06:56.559Z', '2025-05-06T22:46:24.165Z', 'Open', 'd4ecdc14-f805-428a-9d17-53082b0133ff', false, 'Municipal governments', 'Provide a sustainability report.', 'Applications due by June 30 2023.', 'httpcommunitytreeplantingfund.com', '5555678901', '357Maureen_Kiehn22@gmail.com', '358 18 W 29th St, New York, NY 10001', 'Sustainability plan.docx');

INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('a714377c-de49-415c-8ce0-d4f6c96b1c1c', 'Neighborhood Reforestation Event', 'Join us for a day of community tree planting to help beautify our neighborhood and improve air quality.', '2024-10-04T04:52:35.658Z', '2023-12-27T16:05:57.450Z', '202 Birch Boulevard Star City', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'Emily Johnson', '367Zoe53@yahoo.com', '5553456789', true, 'httpexample.comcommunitytreeplanting');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('f39d0ecd-8681-4d58-a41f-5884935550a9', 'Neighborhood Reforestation Event', 'Join us for a day of community tree planting to help beautify our neighborhood and improve air quality.', '2024-07-01T16:18:55.837Z', '2023-12-22T20:28:16.908Z', '456 Oak Avenue Metropolis', '6f623009-302d-41cb-818b-01c8b5ee2361', 'Michael Brown', '378Sherman.Kirlin@yahoo.com', '5551234567', true, 'httpexample.comcityparkplanting');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('0dd921f2-ca19-41f6-a019-a9b5c35def56', 'Neighborhood Reforestation Event', 'An initiative to increase green spaces in urban areas by planting trees in parks and along streets.', '2025-05-23T20:10:47.437Z', '2025-06-28T17:23:38.613Z', '101 Maple Lane Gotham', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'Sarah Davis', '389Genoveva.Frami56@gmail.com', '5551234567', true, 'httpexample.comneighborhoodreforestation');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('f4980068-b6c9-4b6f-a1da-a396df8bcfe1', 'Schoolyard Greening Project', 'Join us for a day of community tree planting to help beautify our neighborhood and improve air quality.', '2023-11-03T18:15:31.351Z', '2025-03-19T17:08:30.755Z', '456 Oak Avenue Metropolis', 'd4ecdc14-f805-428a-9d17-53082b0133ff', 'Michael Brown', '400Macy_Botsford90@gmail.com', '5551234567', false, 'httpexample.comneighborhoodreforestation');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('3b671149-6453-472c-8dbb-7d9fc0dcbf03', 'Schoolyard Greening Project', 'Help us reforest our neighborhood by planting native trees and shrubs.', '2025-01-12T18:01:56.888Z', '2024-09-13T22:41:27.737Z', '101 Maple Lane Gotham', 'aca2de80-ed49-4397-ba15-6d10134bf7a1', 'Michael Brown', '411Pearline_McLaughlin16@gmail.com', '5555678901', false, 'httpexample.comcityparkplanting');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('3ca3af77-f1fd-4134-8fed-77e77e7d24c9', 'Neighborhood Reforestation Event', 'An initiative to increase green spaces in urban areas by planting trees in parks and along streets.', '2025-03-25T15:24:55.950Z', '2024-12-07T13:45:12.407Z', '456 Oak Avenue Metropolis', 'aca2de80-ed49-4397-ba15-6d10134bf7a1', 'Emily Johnson', '422Melody.Smitham27@yahoo.com', '5551234567', true, 'httpexample.comurbangreeninitiative');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('b672211f-5463-498a-84bd-893a341da10c', 'City Park Tree Planting', 'A citywide event to plant trees in our parks and public spaces to promote a greener city.', '2024-07-16T21:25:37.045Z', '2024-11-28T23:57:36.623Z', '456 Oak Avenue Metropolis', 'aca2de80-ed49-4397-ba15-6d10134bf7a1', 'Sarah Davis', '433Rosanna.Kassulke39@hotmail.com', '5555678901', false, 'httpexample.comneighborhoodreforestation');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('5a2fe02a-d33c-4514-be12-626ab2e1ba94', 'Schoolyard Greening Project', 'A project to plant trees in schoolyards to provide shade and improve the environment for students.', '2025-06-09T12:44:07.475Z', '2024-02-14T19:32:02.164Z', '202 Birch Boulevard Star City', '31c0db29-f954-4b29-8be9-b1d176b880df', 'John Smith', '444Michale.Jones86@yahoo.com', '5553456789', true, 'httpexample.comcommunitytreeplanting');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('2176ee28-ab05-40c2-b4b7-de525caba5c4', 'Neighborhood Reforestation Event', 'Join us for a day of community tree planting to help beautify our neighborhood and improve air quality.', '2025-08-19T13:49:43.713Z', '2024-04-06T18:04:36.827Z', '202 Birch Boulevard Star City', '8461bcf4-23e8-4a0d-939f-f672c893b212', 'Emily Johnson', '455Elwin.Olson43@gmail.com', '5553456789', false, 'httpexample.comurbangreeninitiative');
INSERT INTO "Event" ("id", "name", "description", "startDateTime", "endDateTime", "location", "organizationId", "organizerName", "organizerEmail", "organizerPhone", "flaggedForReview", "linkToSite") VALUES ('398c356e-adfb-457d-b842-098329be87f7', 'Neighborhood Reforestation Event', 'Help us reforest our neighborhood by planting native trees and shrubs.', '2025-01-25T05:45:14.404Z', '2024-10-03T19:50:25.856Z', '101 Maple Lane Gotham', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'Sarah Davis', '466Dylan44@yahoo.com', '5552345678', true, 'httpexample.comneighborhoodreforestation');

INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('698101a7-f430-43aa-b55e-07f46f9b1a35', 'EcoFriendly City Grant', 'Funding for communitydriven tree planting events.', 'aca2de80-ed49-4397-ba15-6d10134bf7a1', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('f646d570-cc33-4a21-b459-342126487761', 'Urban Green Initiative', 'Funding for communitydriven tree planting events.', '6f623009-302d-41cb-818b-01c8b5ee2361', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('3e2baa7f-7c69-428a-9699-614dcd4db32d', 'Neighborhood Reforestation Program', 'Support for ecofriendly urban development.', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'event');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('e2fb2cad-1e93-4908-9113-4ef744459bd3', 'Sustainable Forest Grant', 'A grant aimed at urban tree planting projects.', '68c9c657-8e5b-4fab-a9d3-3a5b9f014a96', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('e3456c47-86fb-401c-8133-5af6b3258686', 'Neighborhood Reforestation Program', 'Reforestation efforts in local neighborhoods.', '265ea740-d29f-4ffc-b65c-7e213cded676', 'event');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('2662633b-7281-4288-bdac-403f48820ea3', 'EcoFriendly City Grant', 'A grant aimed at urban tree planting projects.', 'e7c3c598-6117-4961-b0a5-0e859d8c6cfe', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('bab29218-06d3-487c-a70c-38acf30aaf33', 'Community Tree Planting Fund', 'Funding for communitydriven tree planting events.', 'd4ecdc14-f805-428a-9d17-53082b0133ff', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('70ac790a-d3ec-4f8d-87b3-69db83be5625', 'Urban Green Initiative', 'A grant aimed at urban tree planting projects.', '31c0db29-f954-4b29-8be9-b1d176b880df', 'grant');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('467d2762-b2a3-4eb7-ab14-e16945cd7445', 'Neighborhood Reforestation Program', 'A grant aimed at urban tree planting projects.', '8461bcf4-23e8-4a0d-939f-f672c893b212', 'event');
INSERT INTO "GrantDirectory" ("id", "name", "description", "organizationId", "type") VALUES ('4785162d-a4c7-44f5-b830-702dc5cca930', 'Community Tree Planting Fund', 'Support for ecofriendly urban development.', 'aca2de80-ed49-4397-ba15-6d10134bf7a1', 'grant');

INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('e6e4529f-6502-4617-854d-ade473697752', 'Rejected', '2024-10-31T22:57:22.588Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2b95f421-e287-40d3-94b8-c681da915c1d');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('18eff506-e6fc-4470-bd51-255dacf3a1df', 'Pending', '2024-05-31T22:20:36.007Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cd60f4a8-efa4-406e-b81d-d45c8109765d');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('8c1d5acb-4516-4975-a961-3b0cfce2f964', 'Pending', '2024-08-21T18:23:03.357Z', '9b3d02a0-9e49-484e-920a-378bfa1c3725', '654c545a-2e4b-475c-8267-100fc46f613f');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('3bfc7a12-fbe0-41aa-9ac0-5a3f66328f77', 'Approved', '2024-06-24T15:00:51.030Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '41a2679a-b2b0-4cc1-8f30-bcdfc8976570');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('dc402952-6bfe-4927-8fe1-8b2a44b0c181', 'Pending', '2024-05-03T01:47:56.947Z', '2319b86c-c2a8-4304-8d98-95ca08653128', 'cd60f4a8-efa4-406e-b81d-d45c8109765d');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('d0d345f2-b8ff-4e7f-9b36-8a96f340a0e0', 'Approved', '2024-09-06T12:47:32.405Z', '015eb9c6-4694-40f8-ae64-5820a393c680', '768ffeb3-c73f-465a-a18f-135eac5fa790');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('46a5fbcc-3f0f-4ca0-a3c6-f94565905337', 'Pending', '2024-09-20T03:39:51.690Z', '9b3d02a0-9e49-484e-920a-378bfa1c3725', 'ae06ea7c-2102-4333-9c85-f39a9e0ae462');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('c9560b09-f40b-4299-b853-767e967cd79b', 'Under Review', '2024-09-20T10:39:17.154Z', '10651f8b-b764-42b4-a80f-b6c732fb6e70', '54a84830-456e-437a-a106-6483abba3783');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('cca1c36b-a427-40ac-ae92-bc0d65356d7b', 'Pending', '2025-07-05T10:06:25.460Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cd60f4a8-efa4-406e-b81d-d45c8109765d');
INSERT INTO "Application" ("id", "status", "submissionDate", "userId", "grantId") VALUES ('d975d98a-8e23-483c-9bfc-a6425daf2a40', 'Rejected', '2023-11-11T21:31:27.907Z', '51f352df-65a1-46c0-9136-1990f7c200d3', '654c545a-2e4b-475c-8267-100fc46f613f');

INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('d0e5c855-5363-4052-b5d0-69899c043ae2', 'EventFlyer_April2023.jpg', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=542', '2024-02-15T22:16:03.208Z', '3bfc7a12-fbe0-41aa-9ac0-5a3f66328f77');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('7d5ac9fa-0ab9-429a-91fc-937bcbcb0e44', 'VolunteerSignUpForm.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=546', '2024-12-20T14:19:58.781Z', 'cca1c36b-a427-40ac-ae92-bc0d65356d7b');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('42446b9e-67bc-481c-a125-ea0eb78bc2e9', 'TreePlantingGuidelines2023.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=550', '2024-11-27T04:06:05.707Z', 'dc402952-6bfe-4927-8fe1-8b2a44b0c181');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('d1e261d3-2721-477a-933f-1ff49a7e5d6e', 'EventFlyer_April2023.jpg', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=554', '2023-11-13T15:23:12.235Z', 'd0d345f2-b8ff-4e7f-9b36-8a96f340a0e0');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('c2d0c3f7-6bcb-4337-ae9f-b76b60537aef', 'CommunityGrantApplication.docx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=558', '2024-05-20T17:55:15.931Z', 'd975d98a-8e23-483c-9bfc-a6425daf2a40');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('3bcdc9af-106c-4190-8e81-b78472f5561f', 'TreePlantingGuidelines2023.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=562', '2024-03-13T23:12:55.676Z', 'd0d345f2-b8ff-4e7f-9b36-8a96f340a0e0');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('daa6af47-706c-44c8-b403-7785f39813a9', 'TreePlantingGuidelines2023.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=566', '2025-08-02T03:19:47.445Z', 'dc402952-6bfe-4927-8fe1-8b2a44b0c181');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('7394eb95-33c6-4bc0-9ceb-6e0a0e1e21d3', 'EventFlyer_April2023.jpg', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=570', '2024-08-11T02:45:06.264Z', '8c1d5acb-4516-4975-a961-3b0cfce2f964');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('2a6770cc-ef27-4520-8c7c-32f109fde7e9', 'FundingReport2022.xlsx', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=574', '2024-12-31T00:33:37.023Z', 'e6e4529f-6502-4617-854d-ade473697752');
INSERT INTO "Document" ("id", "name", "fileUrl", "uploadDate", "applicationId") VALUES ('42212db1-cb8f-4b6c-ac92-50c2e99bfadf', 'TreePlantingGuidelines2023.pdf', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=578', '2024-02-13T19:39:53.542Z', '18eff506-e6fc-4470-bd51-255dacf3a1df');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
