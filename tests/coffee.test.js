const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const createMachineJson = require('../util/create-machine.json')
const createPodJson = require('../util/create-pod.json')


it('should create a new machine', async () => {
  const res = await request
    .post('/api/v1/machines')
    .send(createMachineJson);
  expect(res.statusCode).toEqual(201);
  expect(res.body.sucess).toEqual(true)
  expect(res.body.message).toBe("machine added sucess")

});


it('should create a new pod', async () => {
  const res = await request
    .post('/api/v2/pods')
    .send(createPodJson);
  expect(res.statusCode).toEqual(201);
  expect(res.body.sucess).toEqual(true)
  expect(res.body.message).toBe("pods added sucess")

});


// Get Large Machines
it('End-point That getLargeMachines should return status code 201, true', async done => {
  const response = await request.get('/api/v1/machines')
  const expected = [{ "cofee_machine_id": "CM101" }, { "cofee_machine_id": "CM102" }, { "cofee_machine_id": "CM103" }];

  expect(response.status).toBe(201)
  expect(response.body.sucess).toEqual(true)
  expect(response.body.message).toBe("All Large Machine Id")
  expect(response.body.data).toEqual(expect.arrayContaining(expected))
  done()
})

// GetAll Espresso VanillaPods
it('End-point That getAllEspressoVanillaPods should return status code 201,true',
  async done => {
    const response = await request.get('/api/v2/espresso-vanilla-pods')
    const expected = [{ "cofee_pod_id": "EP003" }];

    expect(response.status).toBe(201)
    expect(response.body.sucess).toEqual(true)
    expect(response.body.message).toBe("All Espresso Vanilla Pods Id")
    expect(response.body.data).toEqual(expect.arrayContaining(expected))
    expect(response.body.data).toHaveLength(3)
    done()
  })


// Get All Espresso Machine
it('End-point That getAllEspressoMachine should return status code 201,true',
  async done => {
    const response = await request.get('/api/v1/espresso-machines')
    const expected = [{ "cofee_machine_id": "EM001" }];

    expect(response.status).toBe(201)
    expect(response.body.sucess).toEqual(true)
    expect(response.body.message).toBe("All Espresso Machine Id")
    expect(response.body.data).toEqual(expect.arrayContaining(expected))
    expect(response.body.data).toHaveLength(3)
    done()
  })


// Get All Small Pods
it('End-point That getAllSmllPods should return status code 201,true',
  async done => {
    const response = await request.get('/api/v2/small-pods')
    const expected = [{ "cofee_pod_id": "CP001" }];

    expect(response.status).toBe(201)
    expect(response.body.sucess).toEqual(true)
    expect(response.body.message).toBe("All small Pods Id")
    expect(response.body.data).toEqual(expect.arrayContaining(expected))
    expect(response.body.data).toHaveLength(10)
    done()
  })



// Get All Pod Sold In 7 Dozen Packs
it('End-point That getAllPodSoldIn7DozenPacks should return status code 201,true',
  async done => {
    const response = await request.get('/api/v2/pods-sold-in7-dozen-packs')
    const expected = [{ "cofee_pod_id": "EP007" }];

    expect(response.status).toBe(201)
    expect(response.body.sucess).toEqual(true)
    expect(response.body.message).toBe("All pods sold on 7 dozen")
    expect(response.body.data).toEqual(expect.arrayContaining(expected))
    expect(response.body.data).toHaveLength(2)
    done()
  })