import { test, expect } from '@playwright/test'
import { login } from './pages/login.pages'
import { newTicket } from './pages/new_ticket_ntb.pages'
import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'


// Function to read and parse CSV files
function readCSV(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    })
}

// Read and parse the CSV files
const loginRecords = readCSV(path.join(__dirname, 'assets', 'login.csv'))
const ticketRecords = readCSV(path.join(__dirname, 'assets', 'ticketCreation.csv'))

// Find the first login record with Status 'Y'
const loginRecord = loginRecords.find(record => record.Status === 'Y')

test.describe('New Ticket Creation NTB', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/') // Adjust to your actual base URL
        await page.waitForLoadState()
    })

    // Loop through each record from the CSV
    for (const ticketRecord of ticketRecords) {
        if (ticketRecord.Status === 'Y') {
            test(`Ticket Creation for NTB ${ticketRecord.TestID}`, async ({ page }) => {
                await test.step(`Login ${loginRecord.TestID}`, async () => {
                    await login(page, loginRecord) // Assuming login is a function that handles login
                    console.log('Logged in successfully!')
                })

                await test.step(`Create New Ticket ${ticketRecord.TestID}`, async () => {
                    await newTicket(page, ticketRecord) // Pass context if needed
                    console.log('Ticket successfully created!')
                })
            })
        } else {
            test.skip(`Skipped test for ${ticketRecord.TestID}`, async () => {
                console.log(`Skipping test for ID: ${ticketRecord.TestID}`)
            })
        }
    }

    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000)
        await page.close()
    })
})
