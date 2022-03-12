import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BarChart } from './barChart'
import * as packageJson from '../package.json'
import data from './barChart.mocked.json'

export default {
  title: packageJson.displayName,
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

export const FixedThickness: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} />;

export const SpacedFixedThickness: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} gap={10} />;

export const FixedWidth: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} width={500} height={300} />;

export const SpacedFixedWidth: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} width={500} height={300} gap={10} />;

export const ColorUni: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} colorType="uni" startColor="#000000" thickness={150} />;

export const TransparencyGradient: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} colorType="transparent-gradient" startColor="#f2b7a4" />;

export const ReverseTransparencyGradient: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} colorType="reverse-transparent-gradient" startColor="#f2b7a4" />;

export const TwoColorsGradient: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} colorType="gradient" thickness={20} gap={5} startColor="#f28c8e" endColor="#2d6072" />;

export const HeatGradient: ComponentStory<typeof BarChart> = () => <BarChart data={data} x={0} y={0} colorType="heat-gradient" gap={5} startColor="#f3d2b5" endColor="#582841" />;