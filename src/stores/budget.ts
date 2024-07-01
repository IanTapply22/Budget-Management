import { defineStore } from 'pinia'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    currentID: 0, // The current ID of the cost

    cadTaxRate: 13, // The tax rate in Canada as a percent
    usdTaxRate: 15, // The tax rate in the US as a percent

    usdToCadPercentage: 37, // The percentage of the USD to CAD conversion rate

    hourlyWage: 22.50, // Calculated in CAD
    hoursPerWeek: 40, // How many hours per week
    paySchedule: 2, // The pay period in weeks (every __ weeks is pay)
    payTaxPercentage: 15, // Percentage of tax on the pay every 2 weeks
    percentageToSpending: 50, // Percentage of our made money to spend as a percent
    percentageToSaving: 50, // Percentage of our made money to save as a percent

    cadCosts: [] as CADCost[], // The lists of cad costs loaded into the app
    usdCosts: [] as USDCost[], // The list of costs the user has added to the app
  }),
  actions: {
    /**
     * Sets the whole array of CAD costs
     * @param costs The array of CAD costs to set
     */
    setCADCosts(costs: CADCost[]) {
      this.cadCosts = costs
    },
    /**
     * Sets the whole array of USD costs
     * @param usdCosts The array of USD costs to set
     */
    setUSDCosts(usdCosts: USDCost[]) {
      this.usdCosts = usdCosts
    },
    /**
     * Adds a CAD cost to the app
     * @param cost The cost to add
     */
    addCADCost(cost: CADCost) {
      this.cadCosts.push(cost)
    },
    /**
     * Adds a USD cost to the app
     * @param cost The cost to add
     */
    addUSDCost(cost: USDCost) {
      this.usdCosts.push(cost)
    },
    /**
     * Removes a CAD cost from the app
     * @param id The id of the cost to remove
     */
    removeCADCost(id: number) {
      this.cadCosts = this.cadCosts.filter((cost) => cost.id !== id)
    },
    /**
     * Removes a USD cost from the app
     * @param id The id of the cost to remove
     */
    removeUSDCost(id: number) {
      this.usdCosts = this.usdCosts.filter((cost) => cost.id !== id)
    },
    /**
     * Clears all USD costs from the app
     */
    clearUSDCosts() {
      this.usdCosts = []
    },
    /**
     * Clears all CAD costs from the app
     */
    clearCADCosts() {
      this.cadCosts = []
    },
    /**
     * Clears all costs from the app
     */
    clearCosts() {
      this.clearUSDCosts()
      this.clearCADCosts()
    },
    /**
     * Calculates the tax of a USD item
     * @param item The item to calculate the tax of
     * @returns The tax of the item
     */
    calculateUSDItemTax(item: USDCost): number {
      return Math.round(((0.01 * this.usdTaxRate) * item.amount) * 100) / 100;
    },
    /**
     * Calculates the tax of a CAD item
     * @param item The item to calculate the tax of
     * @returns The tax of the item
     */
    calculateCADItemTax(item: CADCost): number {
      return Math.round((0.01 * this.cadTaxRate * item.amount) * 100) / 100
    },
    /**
     * Calculates the total cost of an item in CAD
     * @param item The item to calculate the total cost of
     * @returns The total cost of the item
     */
    calculateCADItemTotal(item: CADCost): number {
      return parseInt((item.amount + item.shippingCost + this.calculateCADItemTax(item)).toFixed(2))
    },
    /**
     * Calculates the total cost of an item in USD
     * @param item The item to calculate the total cost of
     * @returns The total cost of the item
     */
    calculateUSDItemTotal(item: USDCost): number {
      return parseInt((item.amount + item.shippingCost + this.calculateUSDItemTax(item)).toFixed(2));
    },
    /**
     * Calculates the conversion of USD to CAD rounded to 2 decimals
     * @param usd The amount in USD
     * @returns The amount in CAD
     */
    convertToCAD(usd: number): number {
      const conversionRate = 1 + (this.usdToCadPercentage / 100); // Adding 37% to 1
      return Math.round(usd * conversionRate * 100) / 100;
    },
    /**
     * Calculates the conversion of CAD to USD rounded to 2 decimals
     * @param cad The amount in CAD
     * @returns The amount in USD
     */
    convertToUSD(cad: number): number {
      const conversionRate = 1 + (this.usdToCadPercentage / 100); // Adding 37% to 1 for the reverse calculation
      return Math.round(cad / conversionRate * 100) / 100;
    },
  },
})
