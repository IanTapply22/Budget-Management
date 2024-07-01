<template>
    <!-- USD input fields for cost creation -->
    <v-col>
        <v-card width="100%">
            <v-card-title>
                <h2>Create USD Cost</h2>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="usdName" label="Name"></v-text-field>
                    <v-text-field v-model="usdDescription" label="Description"></v-text-field>
                    <v-number-input v-model="usdAmount" label="Amount (USD)" :min=0></v-number-input>
                    <v-number-input v-model="usdShippingCost" label="Shipping Cost (USD)" :min=0></v-number-input>
                    <v-btn @click="createUsdCost()" color="green">
                        Create
                    </v-btn>
                    <v-btn @click="budget.clearUSDCosts()" color="red" class="ml-2">
                        Delete All
                    </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';
export default {
    data() {
        return {
            budget: useBudgetStore(),
            usdName: '',
            usdDescription: '',
            usdAmount: 0,
            usdShippingCost: 0,
        };
    },
    methods: {
        /**
         * Create a USD cost and add it to the budget store.
         */
        createUsdCost() {
            this.budget.addUSDCost({
                id: this.budget.currentID,
                name: this.usdName,
                description: this.usdDescription,
                amount: this.usdAmount,
                shippingCost: this.usdShippingCost,
            });

            // Reset the input fields
            this.reset();
        },
        /**
         * Reset the input fields and increments the current ID that's next up
         */
        reset() {
            this.budget.currentID++;
            this.usdName = '';
            this.usdDescription = '';
            this.usdAmount = 0;
            this.usdShippingCost = 0;
        },
    }
}
</script>