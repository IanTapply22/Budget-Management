// Utilities
import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    cadTaxRate: 0.13, // The tax rate in Canada

    hourlyWage: 0, // Calculated in CAD
    hoursPerWeek: 40, // How many hours per week
    paySchedule: 2, // The pay period in weeks (every __ weeks is pay)
    payTaxPercentage: 0, // Percentage of tax on the pay every 2 weeks
    percentageToSpending: 0, // Percentage of our made money to spend as a percent
    percentageToSaving: 0, // Percentage of our made money to save as a percent

    cadCosts: [] as CadCost[], // The lists of cad costs loaded into the app
    usdCosts: [] as UsdCost[], // The list of costs the user has added to the app
  }),
  actions: {
    setCadTaxRate(rate: number) {
      this.cadTaxRate = rate
    },
    setHourlyWage(wage: number) {
      this.hourlyWage = wage
    },
    setHoursPerWeek(hours: number) {
      this.hoursPerWeek = hours
    },
    setPaySchedule(schedule: number) {
      this.paySchedule = schedule
    },
    setPayTaxPercentage(percentage: number) {
      this.payTaxPercentage = percentage
    },
    setPercentageToSpending(percentage: number) {
      this.percentageToSpending = percentage
    },
    setPercentageToSaving(percentage: number) {
      this.percentageToSaving = percentage
    },
    setCadCosts(costs: CadCost[]) {
      this.cadCosts = costs
    },
    setUsdCosts(usdCosts: UsdCost[]) {
      this.usdCosts = usdCosts
    },
    addCadCost(cost: CadCost) {
      this.cadCosts.push(cost)
    },
    addUsdCost(cost: UsdCost) {
      this.usdCosts.push(cost)
    },
    removeCadCost(index: number) {
      this.cadCosts.splice(index, 1)
    },
    removeUsdCost(index: number) {
      this.usdCosts.splice(index, 1)
    },
    removeCadCostByName(name: string) {
      this.cadCosts = this.cadCosts.filter((cost) => cost.name !== name)
    },
    removeUsdCostByName(name: string) {
      this.usdCosts = this.usdCosts.filter((cost) => cost.name !== name)
    },
    clearUsdCosts() {
      this.usdCosts = []
    },
    clearCadCosts() {
      this.cadCosts = []
    },
    clearCosts() {
      this.clearUsdCosts()
      this.clearCadCosts()
    },
  },
})
