<template>
    <v-col class="ml-2" cols="12" md="12">
        <v-row>
            <!-- USD input fields for cost creation -->
            <v-col>
                <v-card width="100%">
                    <v-card-title>
                        <h2>Create USD Cost</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="usdName" label="Name" required></v-text-field>
                            <v-text-field v-model="usdDescription" label="Description" required></v-text-field>
                            <v-number-input v-model="usdAmount" label="Amount (USD)" required :min=0></v-number-input>
                            <v-number-input v-model="usdShippingCost" label="Shipping Cost (USD)" required
                                :min=0></v-number-input>
                            <v-btn @click="createUsdCost()" color="green">
                                Create
                            </v-btn>
                            <v-btn @click="budget.clearUsdCosts()" color="red" class="ml-2">
                                Delete All
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
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
        </v-row>
        <h1 class="mt-4 text-center">Costs</h1>
        <h2 class="text-center font-weight-light">All costs that have been created. This includes both USD and CAD costs
            and contains information such as tax rates and more!</h2>
        <v-row class="mt-10">
            <!-- Create cards for USD costs -->
            <v-card v-for="cost in budget.usdCosts" :key="cost.id" width="400" rounded class="ml-4">
                <v-card-title>
                    <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
                </v-card-title>
                <v-card-text>
                    <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
                    <h3 class="font-weight-medium">Cost: {{ cost.amount }} USD</h3>
                    <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} USD</h3>
                    <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateUsdItemTax(cost) }} USD</h3>
                    <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateUsdItemTotal(cost) }} USD</h3>
                    <h3 class="font-weight-medium">CAD Conversion: {{ budget.convertToCad(budget.calculateUsdItemTotal(cost)) }} CAD
                    </h3>
                </v-card-text>
            </v-card>
            <!-- Create cards for CAD costs -->
            <v-card v-for="cost in budget.cadCosts" :key="cost.id" width="400" class="ml-4">
                <v-card-title>
                    <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
                </v-card-title>
                <v-card-text>
                    <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
                    <h3 class="font-weight-medium">Cost: {{ cost.amount }} CAD</h3>
                    <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} CAD</h3>
                    <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateCadItemTax(cost) }} CAD</h3>
                    <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateCadItemTotal(cost) }} CAD
                    </h3>
                    <h3 class="font-weight-medium">USD Conversion: {{ budget.convertToUsd(budget.calculateUsdItemTotal(cost)) }} CAD
                    </h3>
                </v-card-text>
            </v-card>
        </v-row>
    </v-col>
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