export const dataRecieved = [
    {
        "projectName": "buildCar",
        "startDate": "123",
        "endDate": "321",
        "root": {
            "task1": { "name": "BuildFrame", "prevTask": "", "nextTask": "task2" },
            "task2": { "name": "BuildBody", "prevTask": "task1", "nextTask": "task4" },
            "task3": { "name": "TestCar", "prevTask": "task4", "nextTask": "" },
            "task4": { "name": "fitTyre", "prevTask": "task2", "nextTask": "task3" },
        }
    }
]
