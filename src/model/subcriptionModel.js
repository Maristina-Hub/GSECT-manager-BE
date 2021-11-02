import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const subscriptionSchema = new Schema(
    {
    subscriptionType: {
        type: String,
        enum: ['type1', 
               'type2', 
               'type3',
               'type4'
        ],
        required: true,
       
    },
    subcriptionPeriod: {
        type: Number,
        enum: ['type1', 
               'type2', 
               'type3',
               'type4'
        ],
        required: true,
      
    },
    status: {
        type: String,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
    }
    }, { timestamps: true }
    )

export const Subscription = model('book', subscriptionSchema);
