<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="12" md="6" lg="3">
                <v-card class="pa-3" outlined>
                    <h2 class="text-center font-weight-light">USD Shipping Cost: <strong>{{ usdShippingCost() }}
                            USD</strong></h2>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <v-card class="pa-3" outlined>
                    <h2 class="text-center font-weight-light">CAD Shipping Cost: <strong>{{ cadShippingCost() }}
                            CAD</strong></h2>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <v-card class="pa-3" outlined>
                    <h2 class="text-center font-weight-light">Total Shipping Costs: <strong>{{ totalShippingCosts() }}
                            CAD</strong></h2>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore()
        };
    },
    methods: {
        /**
         * Calculate the total USD shipping cost in USD
         */
        usdShippingCostRaw() {
            let usdShippingCost = 0;

            for (let i = 0; i < this.budget.usdCosts.length; i++) {
                usdShippingCost += this.budget.usdCosts[i].shippingCost;
            }

            return usdShippingCost;
        },
        /**
         * Calculate the total CAD shipping cost in CAD
         */
        cadShippingCostRaw() {
            let cadShippingCost = 0;

            for (let i = 0; i < this.budget.cadCosts.length; i++) {
                cadShippingCost += this.budget.cadCosts[i].shippingCost;
            }

            return cadShippingCost;
        },
        /**
         * Calculate the total shipping costs in CAD as a number without formatting
         */
        totalShippingCostsRaw() {
            return this.budget.convertToCAD(this.usdShippingCostRaw()) + this.cadShippingCostRaw();
        },
        /**
         * Calculate the total USD shipping cost in USD as a formatted string
         */
        usdShippingCost() {
            return this.formatNumber(this.usdShippingCostRaw());
        },
        /**
         * Calculate the total CAD shipping cost in CAD as a formatted string
         */
        cadShippingCost() {
            return this.formatNumber(this.cadShippingCostRaw());
        },
        /**
         * Calculate the total shipping costs in CAD as a formatted string
         */
        totalShippingCosts() {
            return this.formatNumber(this.totalShippingCostsRaw());
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