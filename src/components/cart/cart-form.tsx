'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import useCartContext from '@/lib/hooks/useCartContext'

const formSchema = z.object({
  quantity: z.coerce.number().int().positive(),
  size: z.enum(['regular', 'large']),
  bean: z.enum(['wholebean', 'ground']),
})

export default function CartForm() {
  const { handleAddToCart, pendingProduct } = useCartContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      size: 'regular',
      bean: 'wholebean',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values', values)
    if (!pendingProduct) return
    const size = values.size as keyof typeof pendingProduct.price
    const productToAdd: any = {
      id: pendingProduct?.id,
      name: pendingProduct?.name,
      price: pendingProduct?.price && pendingProduct?.price[size],
      image: pendingProduct?.image,
      notes: pendingProduct?.notes,
      ...values,
    }
    handleAddToCart(productToAdd)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" {...field} min={1} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-around flex-wrap gap-4">
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <RadioGroup //defaultValue="regular"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regular" id="r1" />
                      <Label htmlFor="r1">
                        Regular: ${pendingProduct?.price?.regular}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="r2" />
                      <Label htmlFor="r2">
                        Large: ${pendingProduct?.price?.large}
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bean"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bean</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wholebean" id="r1" />
                      <Label htmlFor="r1">Wholebean</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ground" id="r2" />
                      <Label htmlFor="r2">Ground</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Add to Cart
        </Button>
      </form>
    </Form>
  )
}
