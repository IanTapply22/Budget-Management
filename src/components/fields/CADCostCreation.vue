<template>
    <!-- CAD input fields for cost creation -->
    <v-col class="mr-4">
        <v-card width="100%">
            <v-card-title>
                <h2>Create CAD Cost</h2>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="cadName" label="Name" required></v-text-field>
                    <v-text-field v-model="cadDescription" label="Description" required></v-text-field>
                    <v-number-input v-model="cadAmount" label="Amount (CAD)" required :min=0></v-number-input>
                    <v-number-input v-model="cadShippingCost" label="Shipping Cost (CAD)" required
                        :min=0></v-number-input>
                    <v-btn @click="createCadCost()" color="green">
                        Create
                    </v-btn>
                    <v-btn @click="budget.clearCadCosts()" color="red" class="ml-2">
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
            cadName: '',
            cadDescription: '',
            cadAmount: 0,
            cadShippingCost: 0,
        };
    },
    methods: {
        /**
         * Create a CAD cost and add it to the budget store.
         */
        createCadCost() {
            this.budget.addCadCost({
                id: this.budget.currentID,
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
            this.budget.currentID++;
            this.cadName = '';
            this.cadDescription = '';
            this.cadAmount = 0;
            this.cadShippingCost = 0;
        },
    },
}
</script>