import { jest } from "@jest/globals"
import inquirer from "inquirer"
import * as serverModule from "./server.js"

jest.mock('inquirer')
jest.mock('./server.js')

describe('Server', () => {
  let mockExit, mockConsoleLog

  beforeEach(() => {
    jest.clearAllMocks()
    
    // mock console.log and process.exit
    mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {})
    
    // reset inquirer.prompt mock for each test
    inquirer.prompt = jest.fn()
  })

  const mockPromptAndRunCommand = async (input) => {
    inquirer.prompt.mockResolvedValueOnce({ inputEquation: input })
    await serverModule.promptUser()
  }

  test('should handle quit command', async () => {
    await mockPromptAndRunCommand('q')
    
    expect(mockConsoleLog).toHaveBeenCalledWith("Fare thee well!")
    expect(mockExit).toHaveBeenCalled()
  })

  test('should handle clear command', async () => {
    await mockPromptAndRunCommand('c')
    
    expect(mockConsoleLog).toHaveBeenCalledWith("The stack has been cleared")
  })

  test('should maintain state between computations', async () => {
    await mockPromptAndRunCommand('3 4 +')
    expect(mockConsoleLog).toHaveBeenCalledWith(7)

    await mockPromptAndRunCommand('2 *')
    expect(mockConsoleLog).toHaveBeenCalledWith(14)
  })

})