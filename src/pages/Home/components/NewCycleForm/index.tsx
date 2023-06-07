import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1"></option>
        <option value="projeto 2"></option>
        <option value="projeto 3"></option>
        <option value="vashti"></option>
      </datalist>

      <label htmlFor="minutesAmount"> durante </label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        max={60}
        minLength={2}
        min={1}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span> minutos.</span>
    </FormContainer>
  )
}
