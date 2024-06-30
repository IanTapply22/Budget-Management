// Utilities
import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    currentID: 0, // The current ID of the cost

    cadTaxRate: 13, // The tax rate in Canada as a percent
    usdTaxRate: 15, // The tax rate in the US as a percent

    hourlyWage: 0, // Calculated in CAD
    hoursPerWeek: 40, // How many hours per week
    paySchedule: 2, // The pay period in weeks (every __ weeks is pay)
    payTaxPercentage: 0, // Percentage of tax on the pay every 2 weeks
    percentageToSpending: 50, // Percentage of our made money to spend as a percent
    percentageToSaving: 50, // Percentage of our made money to save as a percent

    cadCosts: [] as CadCost[], // The lists of cad costs loaded into the app
    usdCosts: [] as UsdCost[], // The list of costs the user has added to the app
  }),
  actions: {
    /**
     * Sets the whole array of CAD costs
     * @param costs The array of CAD costs to set
     */
    setCadCosts(costs: CadCost[]) {
      this.cadCosts = costs
    },
    /**
     * Sets the whole array of USD costs
     * @param usdCosts The array of USD costs to set
     */
    setUsdCosts(usdCosts: UsdCost[]) {
      this.usdCosts = usdCosts
    },
    /**
     * Adds a CAD cost to the app
     * @param cost The cost to add
     */
    addCadCost(cost: CadCost) {
      this.cadCosts.push(cost)
    },
    /**
     * Adds a USD cost to the app
     * @param cost The cost to add
     */
    addUsdCost(cost: UsdCost) {
      this.usdCosts.push(cost)
    },
    /**
     * Removes a CAD cost from the app
     * @param id The id of the cost to remove
     */
    removeCadCost(id: number) {
      this.cadCosts = this.cadCosts.filter((cost) => cost.id !== id)
    },
    /**
     * Removes a USD cost from the app
     * @param id The id of the cost to remove
     */
    removeUsdCost(id: number) {
      this.usdCosts = this.usdCosts.filter((cost) => cost.id !== id)
    },
    /**
     * Clears all USD costs from the app
     */
    clearUsdCosts() {
      this.usdCosts = []
    },
    /**
     * Clears all CAD costs from the app
     */
    clearCadCosts() {
      this.cadCosts = []
    },
    /**
     * Clears all costs from the app
     */
    clearCosts() {
      this.clearUsdCosts()
      this.clearCadCosts()
    },
    /**
     * Calculates the tax of a USD item
     * @param item The item to calculate the tax of
     * @returns The tax of the item
     */
    calculateUsdItemTax(item: UsdCost): number {
      return Math.round(((0.01 * this.usdTaxRate) * item.amount) * 100) / 100;
    },
    /**
     * Calculates the tax of a CAD item
     * @param item The item to calculate the tax of
     * @returns The tax of the item
     */
    calculateCadItemTax(item: CadCost): number {
      return Math.round((0.01 * this.cadTaxRate * item.amount) * 100) / 100
    },
    /**
     * Calculates the total cost of an item in CAD
     * @param item The item to calculate the total cost of
     * @returns The total cost of the item
     */
    calculateCadItemTotal(item: CadCost): number {
      return parseInt((item.amount + item.shippingCost + this.calculateCadItemTax(item)).toFixed(2))
    },
    /**
     * Calculates the total cost of an item in USD
     * @param item The item to calculate the total cost of
     * @returns The total cost of the item
     */
    calculateUsdItemTotal(item: UsdCost): number {
      return parseInt((item.amount + item.shippingCost + this.calculateUsdItemTax(item)).toFixed(2));
    },
    /**
     * Calculates the conversion of USD to CAD rounded to 2 decimals
     * @param usd The amount in USD
     * @returns The amount in CAD
     */
    convertToCad(usd: number): number {
      return Math.round(usd * 1.37 * 100) / 100
    },
    /**
     * Calculates the conversion of CAD to USD rounded to 2 decimals
     * @param cad The amount in CAD
     * @returns The amount in USD
     */
    convertToUsd(cad: number): number {
      return Math.round(cad / 1.37 * 100) / 100
    },
  },
})
