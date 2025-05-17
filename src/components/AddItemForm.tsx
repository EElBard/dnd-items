"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

const formSchema = z.object({
    name: z.string().min(1).max(50),
})

export function AddItemForm() {
    // Form Definition
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Send to Pocketbase
        const record = await pb.collection('test').create(values)
        console.log(record)
    }

    return(
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 text-left">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Vorpal Sword" {...field} />
                            </FormControl>
                            <FormDescription className="text-left">
                                This is the item's name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}