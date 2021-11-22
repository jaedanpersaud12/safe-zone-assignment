/*The TT Safe Zone establishment wishes to get a summary report about the patrons which came to the establishment 
that day. In the report it should list all the patrons by name in one column and the status of their visit in the 
other. The status would either be that they were allowed entry or state the reason that they were not allowed entry. 
Each patron would present an ID card and a vaccination card. Create two object arrays 
(one for IDs and another for vaccination cards) and populate these using constructor methods with the objects from each patron. 
Assume that the first patron's objects occupy the first position in the respective arrays and so on. The objects should have 
methods which return the result of the checks to be performed on entry. There should be one to check the validity of an ID 
card based on the expiration date property. There should be another to check that the name property matches in another object 
based on a supplied argument. Using a loop, traverse the object arrays and extract the information required to create the 
summary report and present this as a web page for the establishment