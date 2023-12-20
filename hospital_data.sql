INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	('1000','Alex','Dough','1990-10-25','123 NTMK','M','0987654321','2017-02-11','Cardiac Nurse',5,'1');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	('1001','Boris','John','1980-06-18','26 CMTT','M','08629753284','2018-05-01','Surgeon',12,'2');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	('1002','Cali','Minsky','1995-09-11','12 NDC','F','03648216875','2020-03-18','Care Nurse',2,'3');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	('1003','Nguyen Van','A','1987-04-18','294 NVC','M','0612352387','2015-12-09','Clinical Nurse',13,'1');
INSERT INTO EMPLOYEE(E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	('Eden','Walson','1992-03-04','284 THD','F','0264873246','2015-10-05','Surgeon',5,'4');
INSERT INTO EMPLOYEE(E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	('Nguyen Van','A','1985-04-18','291 NVC','M','0618452387','2012-12-09','Psychiatrist',13,'1');
INSERT INTO EMPLOYEE(E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	('Tran Nguyen Nhu', 'Hoa', '1997-11-03','112 XVNT','F','03698745210','2020-01-06','Psychiatrist',1,'4');
INSERT INTO EMPLOYEE(E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	('Nguyen Van','B','1987-04-16','291 HCQ','M','03159478126','2014-12-09','Chemist',10,'2');
INSERT INTO EMPLOYEE(E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	('Nguyen Anh','C','1975-04-23','152 BHQ','F','123065497','2018-12-09','ER',16,'3');
    
INSERT INTO NURSE(Encode)
	VALUES	(1000),(1002),(1003),(1007);
    
INSERT INTO DOCTOR(Edcode)
	VALUES	(1001),(1004),(1005),(1006),(1008);
    
INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES 	(1,'Metallica',1001);
INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES	(2,'The Ocean',1004);
INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (3,'Van Canto',1005);
INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (4, 'Dream Theater',1006);
INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (5,'Tiara',NULL);

INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','1The Great','Escape','2010-06-12','M','03654984235');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','2Mercy','Falls','2002-04-8','M','01242743775');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','3Master of','Puppets','1968-07-25','M','02742747545');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','4Justice for','All','1990-12-2','F','4423453727');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','5Helio','Centric','1973-11-4','M','14041243753');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','6The','Unforgiving','2002-08-16','F','7527575637');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','7Individual Thought ','Patterns','1963-01-01','M','45324171237');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','8Human','Enter','1888-02-17','F','37537421437');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','9Mask','Plymton','1965-05-21','M','24537542');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('OP','10Eagle','Shot','2005-07-06','F','42727357343');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','11The Final','Countdown','2005-07-06','F','23753721');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','12Wishing','Goodbye','2010-08-16','M','5435734120');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','13Today Is','Yesterday','1946-12-01','F','345345342');
INSERT INTO PATIENT (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('IP','14Asked','Mountain','1999-11-12','M','378375421');

INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000000,'2021-6-12',NULL,100.0,1000,1005);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000001,'2021-2-10','2021-6-25',200.0,1002,1005);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000002,'2020-1-17','2021-8-13',300.0,1003,1004);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000003,'2019-8-12','2020-12-16',400.0,1000,1001);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000010,'2020-9-02','2021-6-10',321.0,1003,1005);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000011,'2019-04-06','2020-10-16',568.0,1007,1005);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000012,'2021-6-13','2021-8-26',25.0,1007,1008);
INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
	VALUES (1000013,'2019-9-02',NULL,801.0,1003,1008);
    
SELECT *
from Patient;
INSERT INTO OUTPATIENT(Pocode)	VALUES (1000004),(1000006),(1000007),(1000008),(1000009),(1000005);

INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2000,'Paracetamol','2023-3-10',NULL, 112.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2001,'Hoat huyet nhat nhat','2023-02-06',NULL, 24.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2002,'Bioacimin','2023-2-10',NULL, 88.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2003,'Losartan ','2022-10-15','treating hypertension', 116.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2004,'Metformin ','2022-12-25','type 2 diabetes', 201.5);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2005,'Albuterol','2022-11-13','treating asthma', 302.5);

INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
	VALUES (101,'Sanofi','2 MTB', '2621984823');
INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
	VALUES (102,'Repligen','142 NKKN', '7465743428');
INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
	VALUES (103,'Servier','369 QTB', '543572131');
INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
	VALUES (104,'Shionogi','25 HCCC', '375678342');
    
INSERT INTO PROVIDE(Procode, Medprocode)
	VALUES (101,2000),(101,2001),(102,2002),(103,2003),(103,2004),(104,2005);

INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
	VALUES (2003,80.0,100,'2021-10-15');
INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
	VALUES (2004,150.0,100,'2021-12-25');
INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
	VALUES (2005,240.0,100,'2021-11-13');

INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000000,'2021-6-12','2021-7-12',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000000,'2021-7-13','2021-8-12',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000001,'2021-2-10','2021-5-10',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000002,'2020-1-17','2020-4-17',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000002,'2020-4-17','2020-9-17',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000003,'2019-8-12','2020-8-12',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000003,'2020-8-12','2020-12-12',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000010,'2019-6-12','2020-4-12',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000011,'2019-4-6','2020-9-6',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000012,'2021-6-13','2020-8-13',NULL);
INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
	VALUES (1000013,'2019-9-2','2019-12-2',NULL);
    
INSERT INTO T_CONTAIN(Pincode,Medincode) 
	VALUES 	(1000000,2000),(1000000,2001),(1000000,2002),(1000001,2001),
			(1000002,2003),(1000002,2004),(1000003,2005),(1000010,2000),
            (1000010,2002),(1000011,2002),(1000012,2000),(1000012,2001),
            (1000013,2003),(1000013,2004);

INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000004, 20.0, NULL,'2021-5-1','2021-5-2', 1005);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000004, 15.0, NULL,'2021-5-3','2021-5-4', 1005);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000006, 13.0, NULL,'2021-5-5','2021-5-6', 1004);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000006, 25.0, NULL,'2021-5-7','2021-5-8', 1004);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000007, 29.0, NULL,'2021-5-9','2021-5-10', 1001);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000008, 16.0, NULL,'2021-5-11','2021-5-12', 1006);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000009, 24.0, NULL,'2021-5-13','2021-5-14', 1005);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (1000005, 33.0, NULL,'2021-5-15','2021-5-16', 1005);
    
INSERT INTO E_CONTAIN(Poutcode,Medoutcode) VALUES (1000006,2000),(1000004,2002),(1000007,2001),(1000007,2002),(1000008,2002),(1000009,2005),(1000005,2001),(1000005,2003);
     
INSERT INTO USER_TABLE VALUES ('admin', 'admin', 1);