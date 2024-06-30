// Utilities
import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    cadTaxRate: 0.13, // The tax rate in Canada\
    usdTaxRate: 0.15, // The tax rate in the US

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
    removeCadCost(id: number) {
      this.cadCosts = this.cadCosts.filter((cost) => cost.id !== id)
    },
    removeUsdCost(id: number) {
      this.usdCosts = this.usdCosts.filter((cost) => cost.id !== id)
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

    calculateUsdItemTax(item: UsdCost): number {
      return Math.round((this.usdTaxRate * item.amount) * 100) / 100;
    },
    calculateCadItemTax(item: CadCost): number {
      return Math.round((this.cadTaxRate * item.amount) * 100) / 100
    },
    calculateCadItemTotal(item: CadCost): number {
      return (item.amount + item.shippingCost + this.calculateCadItemTax(item))
    },
    calculateUsdItemTotal(item: UsdCost): number {
      return (item.amount + item.shippingCost + this.calculateUsdItemTax(item))
    },
  },
})
