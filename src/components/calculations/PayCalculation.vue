<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-card class="pa-5" elevation="2">
                <v-card-title class="text-h5 text-center">Income Summary Breakdown</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-row>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Gross Income Every {{ budget.paySchedule }}
                                        Weeks</v-list-item-title>
                                    <v-list-item-subtitle>{{ grossIncome() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Net Income Every {{ budget.paySchedule }}
                                        Weeks</v-list-item-title>
                                    <v-list-item-subtitle>{{ netIncome() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Taxed Amount Deduction</v-list-item-title>
                                    <v-list-item-subtitle>{{ taxDeduction() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" md="4">
                                <v-list-item>
                                    <v-list-item-title>Amount To Spendings</v-list-item-title>
                                    <v-list-item-subtitle>{{ spendingsAmount() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col cols="4" md="4">
                                <v-list-item>
                                    <v-list-item-title>Amount Going To Accounts</v-list-item-title>
                                    <v-list-item-subtitle>{{ accountAmount() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col cols="4" md="4">
                                <v-list-item>
                                    <v-list-item-title>Amount To Savings</v-list-item-title>
                                    <v-list-item-subtitle>{{ savingsAmount() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-divider class="my-4"></v-divider>
                        <v-row>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Income After USD Costs</v-list-item-title>
                                    <v-list-item-subtitle>{{ incomeAfterUSDCosts() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Income After CAD Costs</v-list-item-title>
                                    <v-list-item-subtitle>{{ incomeAfterCADCosts() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                            <v-col>
                                <v-list-item>
                                    <v-list-item-title>Total After Costs</v-list-item-title>
                                    <v-list-item-subtitle>{{ totalRemainingSpending() }} CAD</v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        };
    },
    methods: {
        /** RAW VALUES AS NUMERICAL VALUES THAT CAN BE MODIFIED WITH THE NUMBER FUNCTIONS */

        /**
         * Calculate the gross income before taxes.
         */
        grossIncomeRaw(): number {
            return (this.budget.hourlyWage * this.budget.hoursPerWeek) * this.budget.paySchedule;
        },
        /**
         * Calculate the net income after taxes.
         */
        netIncomeRaw(): number {
            return this.grossIncomeRaw() * (1 - this.budget.payTaxPercentage / 100);
        },
        /**
         * Calculate the tax deduction.
         */
        taxDeductionRaw(): number {
            return this.grossIncomeRaw() - this.netIncomeRaw();
        },
        /**
         * Calculate the amount to spendings from the net income.
         */
        spendingsAmountRaw(): number {
            return this.netIncomeRaw() * (this.budget.percentageToSpending / 100);
        },
        /**
         * Calculate the amount to savings from the net income.
         */
        savingsAmountRaw(): number {
            return this.netIncomeRaw() * (this.budget.percentageToSaving / 100);
        },
        /**
         * The amount of USD costs in USD
         */
        usdCostsRaw(): number {
            let usdSpendingAmount = 0;

            // For every cost, add the amount and shipping cost to the total spending amount
            this.budget.usdCosts.forEach((cost) => {
                usdSpendingAmount += cost.amount + cost.shippingCost;
            });

            return usdSpendingAmount;
        },
        /**
         * The amount of CAD costs in CAD
         */
        cadCostsRaw(): number {
            let cadSpendingAmount = 0;

            // For every cost, add the amount and shipping cost to the total spending amount
            this.budget.cadCosts.forEach((cost) => {
                cadSpendingAmount += cost.amount + cost.shippingCost;
            });

            return cadSpendingAmount;
        },
        /** STRING VALUES THAT ARE FORMATTED FROM RAW */

        /**
         * Format the gross income to a currency string.
         */
        grossIncome(): string {
            return this.formatNumber(this.grossIncomeRaw());
        },
        /**
         * Format the net income to a currency string.
         */
        netIncome(): string {
            return this.formatNumber(this.netIncomeRaw());
        },
        /**
         * Format the tax deduction to a currency string.
         */
        taxDeduction(): string {
            return this.formatNumber(this.taxDeductionRaw());
        },
        /**
         * Format the amount to spendings to a currency string.
         */
        spendingsAmount(): string {
            return this.formatNumber(this.spendingsAmountRaw());
        },
        /**
         * Format the amount to savings to a currency string.
         */
        savingsAmount(): string {
            return this.formatNumber(this.savingsAmountRaw());
        },
        accountAmount(): string {
            return this.formatNumber(this.spendingsAmountRaw() + this.savingsAmountRaw());
        },
        /**
         * Formats the amount of income after the USD costs (converted to CAD)
         */
        incomeAfterUSDCosts(): string {
            return this.formatNumber(this.spendingsAmountRaw() - this.budget.convertToCad(this.usdCostsRaw()));
        },
        /**
         * Formats the amount of income after the CAD costs
         */
        incomeAfterCADCosts(): string {
            return this.formatNumber(this.spendingsAmountRaw() - this.cadCostsRaw());
        },
        /**
         * Formats the total remaining spending after all costs in CAD
         */
        totalRemainingSpending(): string {
            return this.formatNumber(this.spendingsAmountRaw() - this.budget.convertToCad(this.usdCostsRaw()) - this.cadCostsRaw());
        },
        /**
         * Format a number to a CAD currency string.
         * @param num The number to format.
         */
        formatNumber(num: number): string {
            return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(num);
        }
    }
};
</script>