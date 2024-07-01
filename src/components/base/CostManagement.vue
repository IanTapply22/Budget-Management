<template>
    <v-col class="ml-2" cols="12" md="12">
        <v-row>
            <!-- Fields to create costs -->
            <USDCostCreation />
            <CADCostCreation />
        </v-row>
        <!-- Header and cost information on shipping -->
        <CostsHeader />
        <CostInformation />
        <!-- Displays the costs for both USD and CAD -->
        <v-row class="mt-10 justify-center">
            <USDCards />
            <CADCards />
        </v-row>
    </v-col>

    <!-- Message displayed if no costs have been created -->
    <h1 v-if="budget.usdCosts == false && budget.cadCosts == false" class="text-center">
        No costs have been created! Please create one with the fields above.
    </h1>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            currentID: 0,
            budget: useBudgetStore(),
            usdName: '',
            cadName: '',
            usdDescription: '',
            cadDescription: '',
            usdAmount: 0,
            cadAmount: 0,
            usdShippingCost: 0,
            cadShippingCost: 0,
        }
    },
    methods: {
        /**
         * Create a USD cost and add it to the budget store.
         */
        createUsdCost() {
            this.budget.addUsdCost({
                id: this.currentID,
                name: this.usdName,
                description: this.usdDescription,
                amount: this.usdAmount,
                shippingCost: this.usdShippingCost,
            });

            // Reset the input fields
            this.reset();
        },
        /**
         * Create a CAD cost and add it to the budget store.
         */
        createCadCost() {
            this.budget.addCadCost({
                id: this.currentID,
                name: this.cadName,
                description: this.cadDescription,
                amount: this.cadAmount,
                shippingCost: this.cadShippingCost,
            });

            // Reset the input fields
            this.reset();
        },
        /**
         * Reset the input fields and increments the current ID that's next up
         */
        reset() {
            this.currentID++;

            this.usdName = '';
            this.usdDescription = '';
            this.usdAmount = 0;
            this.usdShippingCost = 0;

            this.cadName = '';
            this.cadDescription = '';
            this.cadAmount = 0;
            this.cadShippingCost = 0;
        }
    }
}
</script>