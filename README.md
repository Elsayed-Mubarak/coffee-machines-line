# coffee-machines-line

➢ Demo Start Guides


1. If you are using Postman test tool: before test GET APIs you should to fire the two POST End-Points
{Create Coffee Machines & Create Coffee Pods} APIs . Hint : (Json files is attached for this APIs).

2. Another test way, Unit Testing : implemented on demo . run: { npm test } directly for all End-Points.


❖ Coffee-Machine :
1. HTTP POST http://localhost:3000/api/v1/machines {Create Coffee Machines}
- Json test data on util file named( Create-Machine-Json ).

2. HTTP GET http://localhost:3000/api/v1/machines {Get All Large Machine}

3. HTTP GET http://localhost:3000/api/v1/espresso-machines {Get All Espresso Machine}


❖ Coffee-Pods :
3. HTTP POST http://localhost:3000/api/v2/pods { Create Coffee Pods}
- Json test data on util file( Create-Pod-Json ).

4. HTTP GET http://localhost:3000/api/v1/machines { Get All Large Pods}

5. HTTP GET http://localhost:3000/api/v2/espresso-vanilla-pods { Get All Espresso Vanilla Pods}

6. HTTP GET http://localhost:3000/api/v2/small-pods { Get All Small Pods}

7. HTTP GET http://localhost:3000/api/v2/pods-sold-in7-dozen-packs { Get Pods Sold in 7 Dozen}






Regards.
Elsayed Mubarak
https://www.linkedin.com/in/elsayed-mubarak-695333a7/